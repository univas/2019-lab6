import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newCar: Car;
  cars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.newCar = new Car();
    this.cars = this.carService.getAll();
  }

  save() {
    if (!this.newCar.id) {
      this.newCar.id = (new Date()).getTime();
      this.carService.save(this.newCar);

    } else {
      this.carService.edit(this.newCar);
    }

    this.newCar = new Car();
  }

  delete(car : Car) {
    this.carService.delete(car);
  }

  edit(car : Car) {
    this.newCar = new Car(car.id, car.brand, car.model, car.year);
  }

}
