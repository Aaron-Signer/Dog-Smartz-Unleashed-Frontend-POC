import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrainingData } from '../models/training-data';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<TrainingData> {
    return this.http.get<TrainingData>("assets/data.json");
  }
}
