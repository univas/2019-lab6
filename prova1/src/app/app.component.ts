import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CEP } from './cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cepForm', {static: true})
  cepForm : NgForm;

  newCep: CEP;
  ceps: CEP[];

  ngOnInit() {
    this.newCep = new CEP();
    this.ceps = [];
  }

  saveCep() {
    if (!this.newCep.id) {
      this.newCep.id = (new Date()).getTime();
      this.ceps.push(this.newCep);
    
    } else {
      let oldCep = this.ceps.find(cep => cep.id === this.newCep.id);
      oldCep.cep = this.newCep.cep;
      oldCep.city = this.newCep.city;
      oldCep.state = this.newCep.state;
    }

    this.newCep = new CEP();
    this.cepForm.reset();
  }

  edit(cep : CEP) {
    this.newCep = new CEP(cep.id, cep.cep, cep.city, cep.state);
  }

  delete(cep : CEP) {
    let index = this.ceps.findIndex(st => st.id === cep.id);
    this.ceps.splice(index, 1);
  }
}
