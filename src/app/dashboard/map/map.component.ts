import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  lat = 6.2235263;
  lng = -0.5892302;

  currLat = 5.645922;
  currLong = -0.160008;

  constructor() { }

  ngOnInit() {
  }

}
