from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String, unique=True, nullable=False)
    name = Column(String)
    pfp = Column(String)
    prompts = relationship("Prompt", back_populates="user")
