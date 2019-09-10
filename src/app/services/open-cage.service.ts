import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenCageService {

  constructor(private http: HttpClient) { }

  public getPlaceInformation(name: string): Observable<any>{
    return this.http.get(`https://api.opencagedata.com/geocode/v1/json?q=${name.toUpperCase()}&key=7ba2791a709d453aa348205dcd9e5e8f`)
  }

}
