from fastapi.testclient import TestClient

from revisor_api.main import app

client = TestClient(app)


def test_liveness() -> None:
    response = client.get("/api/v1/health/live")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_readiness_without_database(monkeypatch) -> None:
    def unavailable():
        raise RuntimeError("no database")

    monkeypatch.setattr("revisor_api.main.get_engine", unavailable)
    response = client.get("/api/v1/health/ready")
    assert response.status_code == 503
    assert response.json() == {"detail": "Service not ready"}


def test_no_data_api_exposed() -> None:
    assert client.get("/api/v1/users").status_code == 404
    assert client.post("/api/v1/companies", json={}).status_code == 404
