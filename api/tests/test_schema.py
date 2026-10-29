from revisor_api.db import Base
from revisor_api.models import Company, CompanyMembership, User


def test_foundation_tables_registered() -> None:
    assert set(Base.metadata.tables) == {"users", "companies", "company_memberships"}
    assert Company.__tablename__ == "companies"
    assert User.__tablename__ == "users"
    assert CompanyMembership.__tablename__ == "company_memberships"


def test_membership_has_unique_company_user_pair() -> None:
    names = {c.name for c in CompanyMembership.__table__.constraints}
    assert "uq_company_membership" in names
