import { Component, OnInit } from '@angular/core';
import { GetData } from '../../services/get-data.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(public getData: GetData) { }

  public weather: Weather;

  ngOnInit(): void {
    this.getData.getLocation().subscribe(data => {
      this.getData.ipinfoResponse = data;

      const { loc } = data;
      const coordinates = loc.split(',');
      this.getData.getForecast(coordinates[0], coordinates[1]).subscribe(data => {
        this.getData.weatherResponse = data;
        this.weather = data;
        console.log(this.weather);
      })
    });
  }

}
