from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Prompt(Base):
    __tablename__ = "prompts"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    prompt_text = Column(Text, nullable=False)
    # timestamp = Column(Date, nullable=False) # Added feature later
    user = relationship("User", back_populates="prompts")

