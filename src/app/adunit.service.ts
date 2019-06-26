import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { commodity } from './components/index/commodity';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {
  getGlobal() {
    throw new Error("Method not implemented.");
  }
  getGlobalHouse() {
    throw new Error("Method not implemented.");
  }

  uri = 'http://localhost:4000/data';

  constructor(private http: HttpClient) { }


  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
    }

}