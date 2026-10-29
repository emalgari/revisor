# Hostinger VPS production handoff (not authorized for deployment)

Production domain target: `revisor.cloud`.

This repository intentionally **does not** contain an automatic production deployment workflow. The production host may already host unrelated applications, so first inspect Nginx server blocks, ports, backups, firewall rules, available RAM/disk, Docker and DNS. Do not modify any other site.

Before any first release, decide and verify:

1. DNS A/AAAA and www policy, host address, TLS certificate and renewal.
2. VPS SSH users, restricted deployment identity and exact host-key verification.
3. Secrets management and PostgreSQL persistent-storage/backup strategy, including test restores.
4. Versioned images and immutable release selection, migration locking and rollbacks.
5. Required release checks for the exact commit, production health verification and monitoring.
6. A documented recovery procedure, acceptable downtime and explicit owner authorization.

The GitHub Actions CI workflow only checks proposed code. It neither contacts a VPS nor has credentials for one. GitHub Pages is not needed because the site is a server-hosted Next.js application.
