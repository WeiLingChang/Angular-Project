import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCarsSmall() {
    return this.http.get('./assets/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.json().data)
      .then(data => { return data; });
  }

}
