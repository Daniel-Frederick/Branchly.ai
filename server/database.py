from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Can I put the database files in a database folder?
DATABASE_URL = "sqlite:///user.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

def init_db():
    # Import models here to ensure they're registered with Base
    from models.user import User
    from models.prompt import Prompt
    Base.metadata.create_all(bind=engine)
