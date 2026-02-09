from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import crud, schemas

router = APIRouter(prefix="/employees")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.EmployeeOut)
def add_employee(emp: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    return crud.create_employee(db, emp)

@router.get("/", response_model=list[schemas.EmployeeOut])
def list_employees(db: Session = Depends(get_db)):
    return crud.get_employees(db)

@router.delete("/{emp_id}")
def delete_employee(emp_id: int, db: Session = Depends(get_db)):
    crud.delete_employee(db, emp_id)
    return {"message": "Deleted"}
