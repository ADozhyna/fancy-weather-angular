import { Component, OnInit } from '@angular/core';
import { GetData } from '../../services/get-data.service';
import { Weather } from '../../models/weather.model';
import { seasons } from '../../../../app.constants';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(public getData: GetData) { }

  public weather: Weather;
  public src: string = '';
  public coordinates: string[];

  ngOnInit(): void {
    this.getData.getLocation().subscribe(data => {
      this.getData.ipinfoResponse = data;

      const { loc } = data;
      this.coordinates = loc.split(',');
      this.getData.getForecast(this.coordinates[0], this.coordinates[1]).subscribe(data => {
        this.getData.weatherResponse = data;
        this.weather = data;
        const { list } = this.weather;
        const weatherDesc: string = list[0].weather[0].main;
        const date: Date = new Date(list[0].dt_txt);
        const season: string = seasons[date.getMonth()];
        const time: number = date.getHours();
        let timeDay: string;
        if ( time > 0 && time < 6) timeDay = 'night';
        if (time > 6 && time < 12) timeDay = 'morning';
        if (time > 12 && time < 18) timeDay = 'afternoon';
        if (time > 18 && time <= 23) timeDay = 'evening';
        this.getData.getLinkToImage(weatherDesc, season, timeDay).subscribe(data => {
          const {results} = data;
          const max = results.length - 1;
          const index = Math.floor(Math.random() * max);
          const src = results[index].urls.regular;
          this.src = src;
        })

      })
    });
  }

}
