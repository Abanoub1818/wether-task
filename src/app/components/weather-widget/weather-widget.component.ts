import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})


export class WeatherWidgetComponent implements OnInit {
  @Input() WeatherData: any;
  now:any;
  constructor() {
    this.now=new Date().getHours()
  }
  ngOnInit() {

    this.now=new Date().getHours()
    console.log('this.now', this.now)
    /* this.WeatherData = {
      main : {},
      isDay: true
    }; */
  }


}
