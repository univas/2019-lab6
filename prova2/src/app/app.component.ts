import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  weathers : Weather[] = [];
  
  constructor(private weatherService: WeatherService) {
    this.weatherService.getAll('sp').subscribe(
      data => {
        this.weathers = data;
      }
    );
  }

  handleChange(event) {
    this.weatherService.getAll(event.currentTarget.id).subscribe(
      data => {
        this.weathers = data;
      }
    );
  }
}
