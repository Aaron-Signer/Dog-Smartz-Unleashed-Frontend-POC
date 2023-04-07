import { Component } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { TrainingData } from '../../models/training-data';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent {

  public monthArray: any [] = [];
  public currentDate: Date = new Date();

  public data: any;
  public locationSeachField: string = '';

  constructor(private mockDataService: MockDataService) {this.data = new TrainingData();}
    
  ngOnInit() {
    this.monthArray = this.getCalanderArrayByMonthAndYear(this.currentDate.getMonth(), this.currentDate.getFullYear());
    console.log(this.monthArray);
    // this.printCalanderArray(populateCalanderArray);

    this.mockDataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });

  }

  public prevMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
    this.monthArray = this.getCalanderArrayByMonthAndYear(this.currentDate.getMonth(), this.currentDate.getFullYear());

    if (this.data.data){
      this.data.data[0].startDateAndTime?.getMonth()
    }

    let asd = this.data.data?.filter(item => {
      if (item.startDateAndTime) {
        return item.startDateAndTime.getMonth() === this.currentDate.getMonth();
      }
      return false;
    })
    console.log(asd);
  }

  public nextMonth(): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
    this.monthArray = this.getCalanderArrayByMonthAndYear(this.currentDate.getMonth(), this.currentDate.getFullYear());
  }

  public getCalanderArrayByMonthAndYear(month: number, year: number): any[][] {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfMonthInt = firstOfMonth.getDay();

    const lastOfMonthInt = new Date(year, month + 1, 0).getDate();

    let emptyCalanderArray = this.createEmptyCalanderArray();
    let populatedCalanderArray = this.populateCalanderArray(emptyCalanderArray, firstDayOfMonthInt, lastOfMonthInt);

    return populatedCalanderArray;
  }

  public createEmptyCalanderArray(): any[] {
    let emptyMonthArray = new Array();

    for (let row = 0; row < 42; row++) {
      emptyMonthArray.push(null);
    }

    return emptyMonthArray;
  }

  public populateCalanderArray(emptyCalanderArray: any[], firstDayOfTheMonthInt: number, lastDayOfTheMonthInt: number): any[] {
    let day = 1
    for (let i = firstDayOfTheMonthInt; i < firstDayOfTheMonthInt + lastDayOfTheMonthInt; i ++) {
      let newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
      emptyCalanderArray[i] = newDate;
      day++;
    }

    return emptyCalanderArray;
    
  }

// 2d array impl
  // public printCalanderArray(populateCalanderArray: any[][]): void {
  //   for (let row = 0; row < 6; row++) {
  //     console.log(`${populateCalanderArray[row][0]} ${populateCalanderArray[row][1]} ${populateCalanderArray[row][2]} ${populateCalanderArray[row][3]} ${populateCalanderArray[row][4]} ${populateCalanderArray[row][5]} ${populateCalanderArray[row][6]} `)
  //     console.log('\n');
  //   }
  // }

  // public getCalanderArrayByMonthAndYear(month: number, year: number): any[][] {
  //   let emptyMonthArray = this.createEmptyCalanderArray();

  //   const firstOfMonth = new Date(year, month, 1);
  //   const firstDayOfMonthInt = firstOfMonth.getDay();

  //   const lastOfMonthInt = new Date(year, month + 1, 0).getDate();

  //   let emptyCalanderArray = this.createEmptyCalanderArray();
  //   let populatedCalanderArray = this.populateCalanderArray(emptyCalanderArray, firstDayOfMonthInt, lastOfMonthInt);

  //   return populatedCalanderArray;
  // }

  // public createEmptyCalanderArray(): any[][] {
  //   let emptyMonthArray = new Array();

  //   for (let row = 0; row < 6; row++) {

  //     let rowArray = new Array();
  //     for (let col = 0; col < 7; col++) {
  //       rowArray.push(0);
  //     }

  //     emptyMonthArray.push(rowArray);
  //   }

  //   return emptyMonthArray;
  // }

  // public populateCalanderArray(emptyCalanderArray: any[][], firstDayOfTheMonthInt: number, lastDayOfTheMonthInt: number): any[][] {
  //   let day = 1
  //   for (let i = firstDayOfTheMonthInt; i < firstDayOfTheMonthInt + lastDayOfTheMonthInt; i ++) {
  //     let row = Math.floor(i/7);
  //     let col = i%7;
  //     emptyCalanderArray[row][col] = day;
  //     console.log(`${day} : ${row} : ${col}`);
  //     day++;
  //   }

  //   return emptyCalanderArray;
    
  // }
}
