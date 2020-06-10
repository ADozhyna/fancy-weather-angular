import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import ymaps from 'ymaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  @Input() public coordinates;
  public map: any;


  public ngOnInit(): void {
  /* addPoint(point: string) {
    if (point === '') {
      return;
    }
    this.points.push(point);
    this.updateRoute();
    this.geoCoder(point);
    // this.map.setCenter([55.818, 37.513]);
  }

  dellPoint(i: number) {
    this.points.splice(i, 1);
    this.updateRoute();
  }

  renderRoute() {
    this.map.geoObjects.add(this.multiRoute);
    this.multiRoute.editor.start();
  }

  updateRoute() {
    this.multiRoute.model.setReferencePoints(this.points);
    this.map.options.set('mapStateAutoApply', true);
  }

  geoCoder(point: any) {
    new ymaps.geocode('Москва', {result: 1}).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  } */
}

  public ngOnChanges(changes: { [propKey: string]: SimpleChange} ): void {
    if (changes.coordinates.currentValue) {
      console.log(this.coordinates)
      ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=9382a77f-f230-4977-acc4-f2a1b75a8bec&lang=en_US').then(maps => {
      this.map = new maps.Map('map', {
        center: this.coordinates,
        zoom: 10,
      });
      /*new maps.geocode('Москва', {result: 1}).then(res => {
        console.log(res);
      }, err => {
        console.log(err);
      }); */
      //this.renderRoute();
    })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

}
}

