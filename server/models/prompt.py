from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from sqlalchemy import Date
from sqlalchemy.sql import func

# TODO: Fix the timestamp
class Prompt(Base):
    __tablename__ = "prompts"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    prompt_text = Column(Text, nullable=False)
    # timestamp = Column(Date, default=func.now(), nullable=False)
    user = relationship("User", back_populates="prompts")

