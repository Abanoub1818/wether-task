import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { Selection } from 'd3';
import * as d3 from "d3";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bool: boolean=false;
  loading: boolean = true;
  wethData: any;
  selected: Array<any>=[];

  constructor(private http:HttpService) { }
  public data :Array<{Country: string, Temp: number}>=[];
  private svg!:any;
  private margin = 50;
  private width = 450 - (this.margin * 2);
  private height = 400 - (this.margin * 2);


  ngOnInit(): void {

    this.http.share.forEach((ele,i)=>{
         this.bool=true;
        this.data.push({Country:ele,Temp:Math.random()*30})

        this.getWeather({key:"35bfcbea61444938a4575555223003",q:ele,format:"json",num_of_days:3}
        )
      })


    this.createSvg();
    this.drawBars(this.data);
}


getWeather(obj:any){
  this.http.GetWeather(obj)
        .subscribe(res=>{
          this.wethData=res.data.weather;
          this.loading=false;
          // console.log('this.wethData', this.wethData)
          var hour:Array<number>=[]
          var x:number=0;
          this.wethData.forEach((ele: { humidity: any; hourly: any[]; FeelsLikeC: any; },i: any) =>{
          ele.humidity=ele.hourly.reduce((accumulator: number, currentValue: { humidity: any; }) => (accumulator + Number( currentValue.humidity)/ele.hourly.length),0),
          ele.FeelsLikeC=ele.hourly.reduce((accumulator: number, currentValue: { FeelsLikeC: any; }) => (accumulator + Number( currentValue.FeelsLikeC)/ele.hourly.length),0)
          })
          this.selected.push(this.wethData);
          // this.wethData.forEach((e,i) => e.humidity = hour[i]);
          console.log('this.selected', this.selected)

        });
}

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Country))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 50])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: { Country: string; }) => x(d.Country))
  .attr("y", (d: { Temp: d3.NumberValue; }) => y(d.Temp))
  .attr("width", x.bandwidth())
  .attr("height", (d: { Temp: d3.NumberValue; }) => this.height - y(d.Temp))
  .attr("fill", "#d04a35");
}


/////////////////////////////\



}
