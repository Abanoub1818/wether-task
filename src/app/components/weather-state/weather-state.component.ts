import { City, Hourly, Weather } from './../../model/data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-weather-state',
  templateUrl: './weather-state.component.html',
  styleUrls: ['./weather-state.component.scss']
})
export class WeatherStateComponent implements OnInit {
  form!: FormGroup;
  longitude: number | undefined;
  latitude: number | undefined;
  cities:Array<City>=[];
  selectedCountry: City | undefined;
  countries: any[]=[];
  wethData!: Array<Weather>;
  constructor(private http:HttpService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.countries = [
       'Australia',
       'Brazil',
       'China',
       'Egypt',
       'France',
       'Germany',
       'India',
       'Japan',
       'Spain',
       'United States'
  ];
    this.form = this.formBuilder.group({
      location:["",Validators.required],
      date:[""],
      numDay:[null]
    });
    this.getLocation();
  }
  get f() {
    return this.form.controls;
  }

  submit(obj:any){
    if(this.form.valid){
      this.http.pushSelectedCountry(obj.location)
      let param =
        {key:"35bfcbea61444938a4575555223003",q:obj.location,format:"json",num_of_days:obj.numDay,date:obj.date}

      this.getWeather(param)
    }
  }

  getWeather(obj:any){
    this.http.GetWeather(obj)
          .subscribe(res=>{
            this.wethData=res.data.weather;
            // console.log('this.wethData', this.wethData)
            var hour:Array<number>=[]
            var x:number=0;
            this.wethData.forEach((ele,i) =>{
            ele.humidity=ele.hourly.reduce((accumulator, currentValue) => (accumulator + Number( currentValue.humidity)/ele.hourly.length),0),
            ele.FeelsLikeC=ele.hourly.reduce((accumulator, currentValue) => (accumulator + Number( currentValue.FeelsLikeC)/ele.hourly.length),0)
            })
            // this.wethData.forEach((e,i) => e.humidity = hour[i]);


          });
  }

  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;

          this.getWeather({key:"35bfcbea61444938a4575555223003",q:`${this.longitude},${this.latitude}`,format:"json",num_of_days:5})
        });
    } else {
       console.log("No support for geolocation")
    }
  }
  reset(){
    this.form.reset();
    this.getLocation();
  }

}
