import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.scss']
})
export class CoordinatesComponent implements OnInit {

  constructor() { }

  @Input() public coordinates;
  public latitude: string;
  public longitude: string;

  ngOnInit(): void {
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange} ): void {
    if (changes.coordinates.currentValue) {
      console.log(this.coordinates);
      const latDegree = Math.trunc(Number(this.coordinates[0]));
      const latMin = Math.trunc((Number(this.coordinates[0]) - latDegree) * 60);
      this.latitude = `${latDegree}°${latMin}'`;
      const lonDegree = Math.trunc(Number(this.coordinates[1]));
      const lonMin = Math.trunc((Number(this.coordinates[1]) - lonDegree) * 60);
      this.longitude = `${lonDegree}°${lonMin}'`;
    }

  }
}
