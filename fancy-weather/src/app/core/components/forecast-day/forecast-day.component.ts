import { Component, OnInit, Input } from '@angular/core';
import { Forecast, Description } from '../../models/weather.model';
import { weekAll } from '../../../../app.constants';

@Component({
  selector: 'app-forecast-day',
  templateUrl: './forecast-day.component.html',
  styleUrls: ['./forecast-day.component.scss']
})
export class ForecastDayComponent implements OnInit {

  constructor() { }

  @Input() public dayForecast: Forecast;
  public weekDay: string;
  public degree: number;
  public iconClass: string;

  ngOnInit(): void {
    const { dt_txt, main } = this.dayForecast;
    const date: Date = new Date(dt_txt);
    this.weekDay = weekAll[date.getDay()];
    this.degree = Math.round(main.temp);
    const descr: Description = this.dayForecast.weather[0]
    this.iconClass = `owi owi-${descr.icon}`;


  }

}
