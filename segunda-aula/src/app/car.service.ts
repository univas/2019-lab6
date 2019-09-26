import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [];

  constructor() { }

  getAll() {
    return this.cars;
  }

  save(car : Car) {
    this.cars.push(car);
  }

  edit(car : Car) {
    let oldCar = this.cars.find(c => c.id === car.id);
    oldCar.brand = car.brand;
    oldCar.model = car.model;
    oldCar.year = car.year;
  }

  delete(car : Car) {
    let index = this.cars.findIndex(c => c.id === car.id);
    this.cars.splice(index, 1);
  }
}
