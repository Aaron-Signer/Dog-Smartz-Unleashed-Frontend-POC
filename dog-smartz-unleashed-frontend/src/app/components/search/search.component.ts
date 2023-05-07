import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() onSearchEvent: EventEmitter<any> = new EventEmitter();

  @Input()
  public data: any;
  @Input()
  public searchField: String = '';

  public locationSeachField: string = '';

  public constructor() {}

  public onSearch(): void {
    let filteredData = _.cloneDeep(this.data.data.filter(row => {
      return row['location'].toLowerCase().includes(this.locationSeachField.toLowerCase());
    }))

    this.onSearchEvent.emit(filteredData);
  }
}
