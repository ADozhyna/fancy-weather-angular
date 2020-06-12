import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetData } from '../../services/get-data.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public searchText: string;
  @Output() public search = new EventEmitter<string>();

  public onSearch() {
    this.search.emit(this.searchText);
  }

  ngOnInit(): void {


  }

}
