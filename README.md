# revisor

An in-development bookkeeping and business administration **web application** for Swedish sole traders (*enskild firma*) and limited companies (*aktiebolag / AB*).

The intended product includes double-entry bookkeeping, invoices, VAT preparation, payroll, employee contracts, reports, and an educational centre in Swedish, English and Arabic. **These features have not yet been implemented.** This codebase currently provides a multilingual preview landing page, API health/readiness endpoints, foundational company tables, local containers, and a CI starter workflow. Do not enter or upload real company or personal information.

## Stack

- Next.js App Router (JavaScript), next-intl, Tailwind CSS
- FastAPI, Pydantic v2, SQLAlchemy 2, Alembic
- PostgreSQL 16
- Docker Compose for local development
- GitHub Actions CI (no deploy job)

## Quick start (Docker)

Prerequisites: Docker Engine with Compose plugin. Docker is not available in the authoring environment; these steps require validation on your machine.

```bash
cp .env.example .env
# Edit .env: replace the placeholder password both in POSTGRES_PASSWORD
# and in the password section of DATABASE_URL. URL-encode special characters.
docker compose up --build -d
docker compose exec api alembic upgrade head
curl --fail http://localhost:3000/api/v1/health/live
curl --fail http://localhost:3000/api/v1/health/ready
```

Open http://localhost:3000 for the Swedish landing page. Direct language links: `/sv`, `/en`, `/ar`.

Shut down: `docker compose down`. **Do not** use `docker compose down -v` unless you intentionally want to delete the local PostgreSQL data volume.

## Direct development (without containers)

1. API: `cd api && python -m venv .venv && .venv/bin/pip install -e '.[dev]' && .venv/bin/pytest -q`
2. Web: `cd web && npm install && npm run lint && npm test && npm run build`
3. Create and configure a PostgreSQL database and set `DATABASE_URL` appropriately before running migrations or testing readiness.

The package registry is inaccessible in the authoring environment, so no JS lockfile has been produced and the dependency versions have not yet been installed or build-verified. Generate and commit a `package-lock.json` with `npm install` after confirming versions, then update CI and Docker to `npm ci` before considering this milestone complete.

## Development safety

- No authentication, finance APIs, file uploads, payroll, invoicing, or tax logic have been built. No government compliance is claimed.
- No automatic deployment to Hostinger is configured.
- Never commit `.env`, customer files, production keys or payroll data.
- Public production target is `https://revisor.cloud`, but DNS and server setup are outside this milestone.
- The name "revisor" does not imply statutory auditing, authorized auditor services or government certification.

See [`docs/architecture.md`](docs/architecture.md), [`docs/phase-1-status.md`](docs/phase-1-status.md) and [`docs/vps-handoff.md`](docs/vps-handoff.md).
