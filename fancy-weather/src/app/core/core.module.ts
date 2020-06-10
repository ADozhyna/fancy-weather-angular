import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { ForecastDayComponent } from './components/forecast-day/forecast-day.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [HeaderComponent, WrapperComponent, ForecastComponent, ForecastDayComponent, MapComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    HttpClientModule,
  ],
 exports: [HeaderComponent, WrapperComponent]
})
export class CoreModule { }
