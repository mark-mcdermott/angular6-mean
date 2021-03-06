import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getWeights() {
    return this.http.get(`${this.uri}/weight`);
  }

}
