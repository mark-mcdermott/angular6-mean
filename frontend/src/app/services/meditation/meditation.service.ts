import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeditationService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getMeditation() {
    return this.http.get(`${this.uri}/meditation`);
  }

}
