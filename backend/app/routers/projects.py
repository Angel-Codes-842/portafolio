from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.connection import get_db
from app.models.models import Project
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class ProjectCreate(BaseModel):
    title: str
    description: str
    image_url: str | None = None
    github_url: str | None = None
    live_url: str | None = None
    technologies: str | None = None
    is_featured: bool = False

class ProjectResponse(BaseModel):
    id: int
    title: str
    description: str
    image_url: str | None = None
    github_url: str | None = None
    live_url: str | None = None
    technologies: str | None = None
    is_featured: bool
    created_at: datetime

    class Config:
        from_attributes = True

@router.get("/", response_model=List[ProjectResponse])
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).order_by(Project.created_at.desc()).all()
    return projects

@router.get("/featured", response_model=List[ProjectResponse])
def get_featured_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).filter(Project.is_featured == True).all()
    return projects

@router.get("/{project_id}", response_model=ProjectResponse)
def get_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    return project

@router.post("/", response_model=ProjectResponse)
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = Project(**project.dict())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

@router.put("/{project_id}", response_model=ProjectResponse)
def update_project(project_id: int, project: ProjectCreate, db: Session = Depends(get_db)):
    db_project = db.query(Project).filter(Project.id == project_id).first()
    if not db_project:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    for key, value in project.dict().items():
        setattr(db_project, key, value)
    db.commit()
    db.refresh(db_project)
    return db_project

@router.delete("/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Proyecto no encontrado")
    db.delete(project)
    db.commit()
    return {"message": "Proyecto eliminado exitosamente"}
