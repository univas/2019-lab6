import { Component, ViewChild } from '@angular/core';
import { Student } from './student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('studentForm', {static: true})
  studentForm : NgForm;

  newStudent: Student;
  students: Student[];

  ngOnInit() {
    this.newStudent = new Student();
    this.students = [];
  }

  saveStudent() {
    if (!this.newStudent.id) {
      this.newStudent.id = (new Date()).getTime();
      this.students.push(this.newStudent);
    
    } else {
      let oldStudent = this.students.find(student => student.id === this.newStudent.id);
      oldStudent.name = this.newStudent.name;
      oldStudent.email = this.newStudent.email;
      oldStudent.cellPhone = this.newStudent.cellPhone;
    }

    this.newStudent = new Student();
    this.studentForm.reset();
  }

  edit(student : Student) {
    this.newStudent = new Student(student.id, student.name, student.email, student.cellPhone);
  }

  delete(student : Student) {
    let index = this.students.findIndex(st => st.id === student.id);
    this.students.splice(index, 1);
  }

}
