from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import crud, schemas, models

router = APIRouter(prefix="/attendance")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.AttendanceOut)
def mark(att: schemas.AttendanceCreate, db: Session = Depends(get_db)):
    return crud.mark_attendance(db, att)

@router.get("/{employee_id}", response_model=list[schemas.AttendanceOut])
def get(employee_id: int, db: Session = Depends(get_db)):
    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()
