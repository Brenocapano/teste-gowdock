import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkSkyService {

  constructor(private http: HttpClient) { }


  forecast(lat: number, long: number): Observable<any> {
    return this.http.get(`https://api.darksky.net/forecast/5906540b1304b10031de55d2a0687d78/${lat},${long}`)
  }
}
