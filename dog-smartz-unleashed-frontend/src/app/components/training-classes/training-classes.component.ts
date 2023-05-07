import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { TrainingData } from '../../models/training-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-training-classes',
  templateUrl: './training-classes.component.html',
  styleUrls: ['./training-classes.component.scss']
})
export class TrainingClassesComponent implements OnInit{

  public data: any;
  public filteredData: any;

  constructor(private mockDataService: MockDataService) {this.data = new TrainingData();}

  ngOnInit() {
      this.mockDataService.getData().subscribe(data => {
      this.data = data;
      this.filteredData = _.cloneDeep(this.data);
    });

  }


}
