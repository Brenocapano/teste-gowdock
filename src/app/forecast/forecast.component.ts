import { Component, OnInit } from '@angular/core';
import { DarkSkyService } from '../services/dark-sky.service';
import { OpenCageService } from '../services/open-cage.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  results: any;
  place: string;
  constructor(private darkSkyService: DarkSkyService, private openCageService: OpenCageService) { }

  ngOnInit() {
  }

  search(){
    this.results = this.openCageService.getPlaceInformation(this.place)
    .pipe(map(res => {
        return res.results.map(x => {
          return {
            "name": x.formatted,
            "lat": x.geometry.lat,
            "lng": x.geometry.lng
          }
        })
    }));
  }

  lookup(city){
    this.darkSkyService.forecast(city.lat, city.lng).subscribe()
  }

}
