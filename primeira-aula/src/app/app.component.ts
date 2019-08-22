import { Component, ViewChild } from '@angular/core';
import { Student } from './student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('studentForm', { static: true })
  myForm : NgForm;
  
  age = 1;
  title : string = 'Univás';
  name = 'Rodrigo';
  email = 'rodrigo@gmail.com';
  cpf : number;
  student = {
    name: 'João',
    email: 'jone@gmail.com'
  };
  valueA : number;
  valueB : number;
  valueC : number;

  fakeStudent : Student;
  students : Student[] = [];

  ngOnInit() {
    this.newStudent = new Student();
    this.studentList = [];

    console.log('INICIALIZAÇÃO!!!');

    this.fakeStudent = new Student();
    this.fakeStudent.name = 'Juarez';
    this.fakeStudent.email = 'juarez@gmail.com';
    this.fakeStudent.cpf = '123.123.123-24';
    
    for (let i = 0; i < 10; i++) {
      let newStudent = new Student();
      newStudent.name = 'Estudante ' + i;
      newStudent.email = 'estudante' + i + '@gmail.com';
      newStudent.cpf = '123.123.123-0' + i;
      this.students.push(newStudent);
    }
  }

  saveAction() {
    this.age++;
    console.log('CPF atual:::' + this.cpf);
  }

  sum() {
    this.valueC = this.valueA + this.valueB;
  }







  ////////////NEW PART///////////////
  newStudent: Student;
  studentList: Student[];

  saveStudent() {
    this.studentList.push(this.newStudent);
    this.newStudent = new Student();
    this.myForm.reset();
  }
}
