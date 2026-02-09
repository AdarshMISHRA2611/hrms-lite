from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException
import models, schemas

def create_employee(db: Session, employee: schemas.EmployeeCreate):
    emp = models.Employee(**employee.dict())
    try:
        db.add(emp)
        db.commit()
        db.refresh(emp)
        return emp
    except IntegrityError:
        db.rollback()
        raise HTTPException(409, "Employee already exists")

def get_employees(db: Session):
    return db.query(models.Employee).all()

def delete_employee(db: Session, emp_id: int):
    emp = db.query(models.Employee).filter(models.Employee.id == emp_id).first()
    if not emp:
        raise HTTPException(404, "Employee not found")
    db.delete(emp)
    db.commit()

def mark_attendance(db: Session, att: schemas.AttendanceCreate):
    record = models.Attendance(**att.dict())
    try:
        db.add(record)
        db.commit()
        db.refresh(record)
        return record
    except IntegrityError:
        db.rollback()
        raise HTTPException(409, "Attendance already marked")
