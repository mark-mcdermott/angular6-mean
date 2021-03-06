import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeartRateService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getHeartRates() { 
    return this.http.get(`${this.uri}/heart-rate`);
  }

}
