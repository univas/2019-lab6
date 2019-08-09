import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  age = 1;
  title : string = 'Univás';
  name = 'Rodrigo';
  email = 'rodrigo@gmail.com';
  cpf : number;
  student = {
    name: 'João',
    email: 'jone@gmail.com'
  };

  saveAction() {
    this.age++;
    console.log('CPF atual:::' + this.cpf);
  }
}
