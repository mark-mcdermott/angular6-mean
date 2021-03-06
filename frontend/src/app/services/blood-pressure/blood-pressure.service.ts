import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodPressureService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getBloodPressures() {
    return this.http.get(`${this.uri}/blood-pressure`);
  }

}
