import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Weather } from './weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private url = 'https://pacific-wave-50441.herokuapp.com/api/weather/';

  constructor(private http: HttpClient) { }

  getAll(idLocation: string) : Observable<Weather[]> {
    return this.http.get<Weather[]>(this.url + idLocation);
  }
}
