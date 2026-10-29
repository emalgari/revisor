"""Foundation API: liveness and readiness only. No customer-data endpoints."""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from .db import get_engine


class Health(BaseModel):
    status: str


app = FastAPI(
    title="revisor API",
    description="Foundation API in development. No financial operations are supported.",
    version="0.1.0",
    docs_url=None,
    redoc_url=None,
    openapi_url=None,
)


@app.get("/api/v1/health/live", response_model=Health)
def liveness() -> Health:
    return Health(status="ok")


@app.get("/api/v1/health/ready", response_model=Health)
def readiness() -> Health:
    try:
        with get_engine().connect() as connection:
            connection.execute(text("SELECT 1"))
    except (SQLAlchemyError, OSError, RuntimeError, TimeoutError) as exc:
        raise HTTPException(status_code=503, detail="Service not ready") from exc
    return Health(status="ready")
