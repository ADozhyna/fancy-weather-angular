import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetData {
  private ipinfoToken: string = environment.ipinfo.token;

  constructor(private http: HttpClient) { }

  public getLocation(): Observable<Location> {
    const url = `https://ipinfo.io/json?token=${this.ipinfoToken}`;
    return this.http.get<Location>(url);

  }
}
