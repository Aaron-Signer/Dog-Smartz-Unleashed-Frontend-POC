import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrainingData } from '../models/training-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<number> {
    return this.http.get<number>("assets/data.json");
  }
}
