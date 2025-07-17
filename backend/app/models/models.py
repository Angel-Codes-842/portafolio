from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.sql import func
from app.database.connection import Base

class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    image_url = Column(String(255))
    github_url = Column(String(255))
    live_url = Column(String(255))
    technologies = Column(String(200))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_featured = Column(Boolean, default=False)

class Contact(Base):
    __tablename__ = "contact_messages"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_read = Column(Boolean, default=False)

class About(Base):
    __tablename__ = "about"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    content = Column(Text, nullable=False)
    section = Column(String(50))
    order = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
