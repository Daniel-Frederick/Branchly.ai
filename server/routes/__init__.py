# from flask_sqlalchemy import SQLAlchemy
# from datetime import datetime
#
# db = SQLAlchemy()
#
# class YourTable(db.Model):
#     __tablename__ = 'your_table_name'
#
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(), nullable=False)
#     type = db.Column(db.String(), nullable=False)
#     status = db.Column(db.String(), nullable=False)
#     created_at = db.Column(db.DateTime, default=datetime.utcnow)
#
#     def __init__(self, name, type, status):
#         self.name = name
#         self.type = type
#         self.status = status
#
#     def __repr__(self):
#         return f'<YourTable {self.name}>'
#
#     def to_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'type': self.type,
#             'status': self.status,
#             'created_at': self.created_at.isoformat() if self.created_at else None
#         }
