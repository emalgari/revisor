# Foundation architecture (draft)

- **Entry point:** Next.js public website, listening on `127.0.0.1:3000` on the development host. `/sv`, `/en`, `/ar` use next-intl for localization.
- **API path:** Next.js rewrites `/api/v1/*` to the private FastAPI container. The API currently exposes only `/api/v1/health/live` and `/api/v1/health/ready`.
- **Database:** PostgreSQL on a private Compose network with a persistent named volume. Alembic migrations are run deliberately; container startup does not automatically run migrations.
- **Schema:** Placeholder user, company and company-membership tables; there are no public create/list/update endpoints. This does **not** constitute implemented identity, permissions or tenant isolation.
- **Future auth:** Select and document an Auth.js/FastAPI token boundary with secure session validation, CSRF and account-linking controls before adding any private API routes.
- **Future accounts:** Ledger, accounting, invoices, payroll and reporting depend on independently verified Swedish financial requirements and audited calculations. None are implemented in this milestone.
- **Runtime secrets:** Local `.env` (ignored). Production secret management and deployment identity not yet implemented.
- **Security model:** API and DB bind to no public host ports in Compose. Only the web host port is exposed on loopback. No production exposure is authorized.

## Intentional exclusions

This milestone does not include BankID, Google OAuth, email/password authentication, a finance dashboard, invoice PDFs, actual Swedish financial calculations, runtime monitoring, backups or a live VPS deployment. Treat all those as outstanding work.
