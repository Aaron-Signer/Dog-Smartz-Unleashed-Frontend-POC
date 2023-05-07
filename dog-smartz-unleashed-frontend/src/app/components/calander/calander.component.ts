import { Component } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { TrainingData } from '../../models/training-data';
import { CalanderDay } from 'src/app/models/calander-day';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss']
})
export class CalanderComponent {

  public monthArray: CalanderDay [] = [];
  public currentDate: Date = new Date();

  public data: any;
  public locationSeachField: string = '';

  public colors = {
    'Sam Ragan': '#BF3FBF',
    'Dee Franke': 'rgb(63%, 33%, 99%)',
    'Jenny Falvey': 'rgb(15%, 87%, 83%)',
    'Amber Nemergut': 'rgb(64%, 60%, 1%)',
    'Heather Constiner': 'rgb(31%, 89%, 28%)',
    'Karen Becker': 'rgb(9%, 71%, 59%)',
    'April Courtney': 'rgb(48%, 45%, 29%)',
    'Heather Huff': 'rgb(53%, 24%, 23%)'
  }

  public locationColors = {
    'Poland': '#BF3FBF',
    'Warren': 'rgb(15%, 87%, 83%)'
  }

  constructor(private mockDataService: MockDataService) {this.data = new TrainingData();}
    
  ngOnInit() {
    this.mockDataService.getData().subscribe(data => {
      this.data = data;
      this.monthArray = this.getCalanderArrayByMonthAndYear(this.currentDate.getMonth(), this.currentDate.getFullYear());
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

  public getCalanderArrayByMonthAndYear(month: number, year: number): CalanderDay[] {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfMonthInt = firstOfMonth.getDay();

    const lastOfMonthInt = new Date(year, month + 1, 0).getDate();

    let emptyCalanderArray = this.createEmptyCalanderArray();
    let populatedCalanderArray = this.populateCalanderArray(emptyCalanderArray, firstDayOfMonthInt, lastOfMonthInt);

    return populatedCalanderArray;
  }

  public createEmptyCalanderArray(): CalanderDay[] {
    let emptyMonthArray = new Array();

    for (let row = 0; row < 42; row++) {
      emptyMonthArray.push(null);
    }

    return emptyMonthArray;
  }

  public populateCalanderArray(emptyCalanderArray: CalanderDay[], firstDayOfTheMonthInt: number, lastDayOfTheMonthInt: number): CalanderDay[] {
    let day = 1
    for (let i = firstDayOfTheMonthInt; i < firstDayOfTheMonthInt + lastDayOfTheMonthInt; i ++) {
      let newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
      let calanderDay = new CalanderDay(newDate);

      let classesOfTheDay = this.data.data.filter(item => {
        let dd = new Date(item['startDateAndTime']);
        return this.compateDates(dd, newDate);
      })

      calanderDay.events = classesOfTheDay.sort((item1, item2) => {
        let result = new Date(item1['startDateAndTime']).getTime() -  new Date(item2['startDateAndTime']).getTime();

        if (result == 0) {
          result = item1['instructorName'].localeCompare(item2['instructorName']);
        }

        return result;
      })

      // calanderDay.events = classesOfTheDay;

      emptyCalanderArray[i] = calanderDay;
      day++;
    }

    return emptyCalanderArray;
    
  }

  public compateDates(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() && 
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  public showOverlay(event: any): void {
    console.log(this.data.data.filter(item => {return event.originalTarget.id === item.id})[0]);
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
