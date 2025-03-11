# class Prompt(Base):
#     __tablename__ = "prompts"
#     id = Column(Integer, primary_key=True, autoincrement=True)
#     user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
#     prompt_text = Column(Text, nullable=False)
#     # Relationship back to the user
#     user = relationship("User", back_populates="prompts")
