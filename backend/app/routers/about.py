from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.connection import get_db
from app.models.models import About
from pydantic import BaseModel

router = APIRouter()

class AboutCreate(BaseModel):
    title: str
    content: str
    section: str
    order: int = 0

class AboutResponse(BaseModel):
    id: int
    title: str
    content: str
    section: str
    order: int
    created_at: str

    class Config:
        from_attributes = True

@router.get("/", response_model=List[AboutResponse])
def get_about_info(db: Session = Depends(get_db)):
    about_info = db.query(About).order_by(About.section, About.order).all()
    return about_info

@router.get("/{section}", response_model=List[AboutResponse])
def get_about_section(section: str, db: Session = Depends(get_db)):
    about_info = db.query(About).filter(About.section == section).order_by(About.order).all()
    return about_info

@router.post("/", response_model=AboutResponse)
def create_about_info(about: AboutCreate, db: Session = Depends(get_db)):
    db_about = About(**about.dict())
    db.add(db_about)
    db.commit()
    db.refresh(db_about)
    return db_about

@router.put("/{about_id}", response_model=AboutResponse)
def update_about_info(about_id: int, about: AboutCreate, db: Session = Depends(get_db)):
    db_about = db.query(About).filter(About.id == about_id).first()
    if not db_about:
        raise HTTPException(status_code=404, detail="Información no encontrada")
    for key, value in about.dict().items():
        setattr(db_about, key, value)
    db.commit()
    db.refresh(db_about)
    return db_about

@router.delete("/{about_id}")
def delete_about_info(about_id: int, db: Session = Depends(get_db)):
    about_info = db.query(About).filter(About.id == about_id).first()
    if not about_info:
        raise HTTPException(status_code=404, detail="Información no encontrada")
    db.delete(about_info)
    db.commit()
    return {"message": "Información eliminada exitosamente"}
