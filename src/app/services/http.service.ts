import { Weather } from './../model/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private content = new BehaviorSubject <string>('');
  public share: Set<string>=new Set();
  public countriesWeath:Array<Weather>=[]
  constructor(private http: HttpClient) {
    this.content.asObservable().subscribe(ele=>{
      this.share.add(ele);
    })
    this.share.delete('');
  }
  GetWeather(param:any): Observable<any> {
    // console.log('param :>> ', param);
    return this.http.get<any>('http://api.worldweatheronline.com/premium/v1/weather.ashx?',{params: param});
  }
  fillDashboard(){
    console.log('this.share', this.share)
    for(let i of this.share) {
      this.GetWeather({key:"35bfcbea61444938a4575555223003",q:i,format:"json",num_of_days:3}).subscribe(res=>{
        console.log('resssssssss', res)
        this.countriesWeath.push(res.data.weather)
      })

     }
     console.log('this.countriesWeath', this.countriesWeath)
     return this.countriesWeath
  }
  pushSelectedCountry(coun:string){
    this.content.next(coun);
  }

}


