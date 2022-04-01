import { Weather } from './../../model/data';
import { HttpService } from 'src/app/services/http.service';
import { Component, ViewEncapsulation, OnInit, DoCheck, IterableDiffers } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';


@Component({
    selector: 'app-line-chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit,DoCheck {

    title = 'Line Chart';

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line!: d3Shape.Line<[number, number]>;
    coordinateValue:any;
    selectedCountry: Array<Weather> = [];
    passCountry:Set<string>=new Set()
  wethData: any;
  iterableDiffer: any;
    constructor(private http : HttpService,private iterableDiffers: IterableDiffers) {
      this.iterableDiffer = iterableDiffers.find([]).create();


        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    ngDoCheck() {
      let changes = this.iterableDiffer.diff(this.selectedCountry);
      if (changes) {
          console.log('Changes detected!');

          this.initSvg();
          this.initAxis();
          this.drawAxis();
          this.drawLine();
        }
  }

    getWeather(obj:any){
      this.http.GetWeather(obj)
            .subscribe(res=>{
              this.wethData=res.data.weather;
              // console.log('this.wethData', this.wethData)
              var hour:Array<number>=[]
              var x:number=0;
              this.wethData.forEach((ele: { humidity: any; hourly: any[]; FeelsLikeC: any; },i: any) =>{
              ele.humidity=ele.hourly.reduce((accumulator: number, currentValue: { humidity: any; }) => (accumulator + Number( currentValue.humidity)/ele.hourly.length),0),
              ele.FeelsLikeC=ele.hourly.reduce((accumulator: number, currentValue: { FeelsLikeC: any; }) => (accumulator + Number( currentValue.FeelsLikeC)/ele.hourly.length),0)
              })
              // this.wethData.forEach((e,i) => e.humidity = hour[i]);


            });


    }


    ngOnInit() {
        this.passCountry=this.http.share;
        for(let i of this.passCountry) {
          this.getWeather({key:"35bfcbea61444938a4575555223003",q:i,format:"json",num_of_days:3})
         }
         this.selectedCountry=this.http.fillDashboard()
         console.log('this.selectedCountry', this.selectedCountry)
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawLine();
    }

    private initSvg() {
        this.svg = d3.select('svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private initAxis() {
        this.x = d3Scale.scaleTime().range([0, this.width]);
        this.y = d3Scale.scaleLinear().range([this.height, 0]);
        console.log('this.selectedCountryininininini', this.selectedCountry)
        this.x.domain(d3Array.extent(this.selectedCountry, (d) => d.date ));
        this.y.domain(d3Array.extent(this.selectedCountry, (d) => d.avgtempC ));
    }

    private drawAxis() {

        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3Axis.axisBottom(this.x));

        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3Axis.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Price ($)');
    }

    private drawLine() {
        this.line = d3Shape.line()
            .x( (d: any) => this.x(d.date) )
            .y( (d: any) => this.y(d.value) );

        this.svg.append('path')
            .datum(this.selectedCountry)
            .attr('class', 'line')
            .attr('d', this.line);
    }

}
