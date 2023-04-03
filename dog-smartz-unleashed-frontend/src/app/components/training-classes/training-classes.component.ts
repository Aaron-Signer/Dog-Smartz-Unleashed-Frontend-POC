import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { TrainingData } from '../../models/training-data';

@Component({
  selector: 'app-training-classes',
  templateUrl: './training-classes.component.html',
  styleUrls: ['./training-classes.component.scss']
})
export class TrainingClassesComponent implements OnInit{

  public data: TrainingData;
  public locationSeachField: string = '';

  constructor(private mockDataService: MockDataService) {this.data = new TrainingData();}

  ngOnInit() {
      this.mockDataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });

  }

  public onSearch(): void {
    console.log(this.locationSeachField);
    // this.data.filter(row => {
    //   row['Location'].contains === this.locationSeachField
    // })
  }

}
