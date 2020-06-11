import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import { Weather, Forecast, Main, Description, Wind } from '../../models/weather.model';
import { countryCodes, week, month} from '../../../../app.constants';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  //private countryCodes = countryCodes;
  constructor() { }

  @Input() public weatherData: Weather;
  public city: string;
  public country: string;
  public deg: number;
  public feels: number;
  public wind: number;
  public humidity: number;
  public description: string;
  public date: string;
  public iconIdClass: string;
  public dayForecast: Forecast[];

  public renderDate(timezone): string {
    const timezoneOffset: number = timezone / 3600;
    const locTime: Date = new Date();
    const ms: number = locTime.getTime() + (locTime.getTimezoneOffset() * 60000) + timezoneOffset * 3600000;
    const time: Date = new Date(ms);
    const hours: number = time.getHours();
    const minutes: number = time.getMinutes();
    const weekDay: String = week[time.getDay()];
    const year: number = time.getFullYear();
    const day: number = time.getDate();
    const monthString: string = month[time.getMonth()];
    let minString: string;
    let hourString: string;
    if (hours < 10) hourString = `0${hours}`;
    if (minutes < 10) minString = `0${minutes}`;
    return `${weekDay} ${day} ${monthString} ${year} ${hourString || hours}:${minString || minutes}`;
  }

  public ngOnInit(): void {

  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange } ): void {
    if(changes.weatherData.currentValue) {
      const { city, list } = changes.weatherData.currentValue;
      const currentTemp: Forecast = list[0];
      const main: Main = currentTemp.main;
      const descr: Description = currentTemp.weather[0];
      const wind: Wind = currentTemp.wind;
      const timezone: number = city.timezone;
      this.city = city.name;
      this.country = countryCodes[city.country];
      this.deg = Math.round(main.temp);
      this.feels = Math.round(main.feels_like);
      this.humidity = Math.round(main.humidity);
      this.description = descr.description;
      this.iconIdClass = `owi owi-${descr.icon}`;
      this.wind = wind.speed;
      this.date = this.renderDate(timezone);
      this.dayForecast = list.filter((el, i) => i % 8 === 0).splice(1, 3);
      console.log(this.dayForecast);
      setInterval(() => {
        this.date = this.renderDate(timezone);
      }, 60000)
    }
  }
}
