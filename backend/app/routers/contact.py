from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database.connection import get_db
from app.models.models import Contact
from pydantic import BaseModel

router = APIRouter()

class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    message: str
    created_at: str
    is_read: bool

    class Config:
        from_attributes = True

@router.post("/", response_model=ContactResponse)
def send_contact_message(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

@router.get("/", response_model=List[ContactResponse])
def get_contact_messages(db: Session = Depends(get_db)):
    messages = db.query(Contact).order_by(Contact.created_at.desc()).all()
    return messages

@router.get("/unread", response_model=List[ContactResponse])
def get_unread_messages(db: Session = Depends(get_db)):
    messages = db.query(Contact).filter(Contact.is_read == False).all()
    return messages

@router.put("/{message_id}/read")
def mark_as_read(message_id: int, db: Session = Depends(get_db)):
    message = db.query(Contact).filter(Contact.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Mensaje no encontrado")
    message.is_read = True
    db.commit()
    return {"message": "Mensaje marcado como leído"}

@router.delete("/{message_id}")
def delete_message(message_id: int, db: Session = Depends(get_db)):
    message = db.query(Contact).filter(Contact.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Mensaje no encontrado")
    db.delete(message)
    db.commit()
    return {"message": "Mensaje eliminado exitosamente"}
