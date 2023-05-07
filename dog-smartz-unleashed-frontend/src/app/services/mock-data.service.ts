import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrainingData } from '../models/training-data';
import { TrainingClass } from '../models/training-class';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>("assets/data.json");
  }
}
