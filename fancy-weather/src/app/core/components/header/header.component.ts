import { Component, OnInit } from '@angular/core';
import { GetData } from '../../services/get-data.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

}
