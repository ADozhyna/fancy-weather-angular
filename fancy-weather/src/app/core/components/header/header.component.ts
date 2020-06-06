import { Component, OnInit } from '@angular/core';
import { GetData } from '../../services/get-data.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public getData: GetData) { }

  ngOnInit(): void {
    this.getData.getLocation().subscribe(data => console.log(data));
  }

}
