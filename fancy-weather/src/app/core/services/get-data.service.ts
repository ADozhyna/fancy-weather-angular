import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';
import { Weather } from '../models/weather.model';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class GetData {
  private ipinfoToken: string = environment.ipinfo.token;
  private weatherToken: string = environment.openWeatherAPI.token;
  private imageToken: string = environment.unsplashAPI.token;

  constructor(private http: HttpClient) { }

  public ipinfoResponse: Location;
  public weatherResponse: Weather;

  public getLocation(): Observable<Location> {
    const url: string = `https://ipinfo.io/json?token=${this.ipinfoToken}`;
    return this.http.get<Location>(url);

  }

  public getForecast(city: string): Observable<Weather> {
    const url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=${this.weatherToken}`;
    return this.http.get<Weather>(url);
  }

  public getLinkToImage(weatherDescription: string, season: string, time: string): Observable<Image> {
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=100&orientation=landscape&query=${weatherDescription}-${season}-${time}&client_id=${this.imageToken}`;
    return this.http.get<Image>(url);
  }


}
