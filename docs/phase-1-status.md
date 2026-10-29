# Phase 1 checkpoint: foundation draft

## Included in the starter package

1. A Scandinavian-style localized preview page with SV, EN and Arabic RTL support.
2. A FastAPI service with liveness and DB readiness checks.
3. A minimal PostgreSQL schema and initial Alembic revision.
4. Development-only Compose configuration, container builds and sample environment variables.
5. API unit tests, translation-key tests and GitHub Actions CI definition.
6. Architecture and handoff documentation.

## Not yet complete

- Package-lock.json for the frontend, and reproducible Python lockfile; dependency compatibility checks.
- Actual local/CI Docker builds and SQL migration verification.
- Authentication, protected accounts, role enforcement and tenant isolation.
- Company onboarding, VAT/accounting/payroll computations and persistent customer-facing features.
- Backup, restore, production TLS, monitoring and deploy pipeline.
- Full accessibility audit and all production user-facing pages.

**Result:** This is an isolated testable starting point, **not** a finished Phase 1 and **not** production-ready. The authoring environment has Python but cannot reach public npm registries and has no Docker. All remaining tests require execution on a machine with dependencies and Docker installed. Do not merge merely because the files exist.
