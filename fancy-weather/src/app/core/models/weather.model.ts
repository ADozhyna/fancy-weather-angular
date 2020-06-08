import { MatInput } from '@angular/material/input';
import { SystemJsNgModuleLoader } from '@angular/core';

export interface Weather {
  code: string;
  message: number;
  cnt: number;
  list: Forecast[];
  city: City;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export interface Forecast {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  sys: Sys;
  weather: Description[];
  wind: Wind;
}

interface Clouds {
  all: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  pod: string;
}

export interface Description {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

