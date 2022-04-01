export interface Weather {
  humidity?: number;
  FeelsLikeC?:number;
  astronomy: Array<Astronomy>
  date: Date,
  maxtempC: number,
  maxtempF: number,
  mintempC: number,
  mintempF: number,
  avgtempC: number,
  avgtempF: number,
  totalSnow_cm: number,
  sunHour: number,
  uvIndex: number,
  hourly: Array<Hourly>
}
export interface request{
    type: string,
    query: string

}
export interface City {
  name: string,
  code: string
}
export interface Current_Condition {
  observation_time: string,
  temp_C: number,
  temp_F: number,
  weatherCode: number,
  weatherIconUrl: [
    {
      value: string
    }
  ],
  weatherDesc: [
   {
      value: string
    }
  ],
  windspeedMiles: number,
  windspeedKmph: number,
  winddirDegree: number,
  winddir16Point: string,
  precipMM: number,
  precipInches: number,
  humidity: number,
  visibility: number,
  visibilityMiles: number,
  pressure: number,
  pressureInches: number,
  cloudcover: number,
  FeelsLikeC: number,
  FeelsLikeF: number,
  uvIndex: number
}
export interface Astronomy {
  sunrise: string,
  sunset: string,
  moonrise: string,
  moonset: string,
  moon_phase: string,
  moon_illumination: number
}
export interface Hourly {
  time: number,
  tempC: number,
  tempF: number,
  windspeedMiles: number,
  windspeedKmph: number,
  winddirDegree: number,
  winddir16Point: string,
  weatherCode: number,
  weatherIconUrl: [
    {
      value: string
    }
  ],
  weatherDesc: [
    {
      value: string
    }
  ],
  precipMM: number,
  precipInches: number,
  humidity: number,
  visibility: number,
  visibilityMiles: number,
  pressure: number,
  pressureInches: number,
  cloudcover: number,
  HeatIndexC: number,
  HeatIndexF: number,
  DewPointC: number,
  DewPointF: number,
  WindChillC: number,
  WindChillF: number,
  WindGustMiles: number,
  WindGustKmph: number,
  FeelsLikeC: number,
  FeelsLikeF: number,
  chanceofrain: number,
  chanceofremdry: number,
  chanceofwindy: number,
  chanceofovercast: number,
  chanceofsunshine: number,
  chanceoffrost: number,
  chanceofhightemp: number,
  chanceoffog: number,
  chanceofsnow: number,
  chanceofthunder: number,
  uvIndex: number
}
export interface Month {
  index: string,
  name: string,
  avgMinTemp: number,
  avgMinTemp_F: number,
  absMaxTemp: number,
  absMaxTemp_F: number,
  gDailyRainfall: number
}


export interface nearest_area{
  areaName:string,
  country:string,
  region:string,
  latitude:number,
  longitude:number,

}

export interface Air_Quality {
  co:number,
  o3:number,
  no2:number,
  so2:number,
  pm2_5:number,
  pm10:number,
  us_epa_index:number,
  gb_defra_index:number


}

/* export interface alerts
{

alert:{
  "headline":"Flood Warning issued January 05 at 9:47PM EST until January 07 at 6:15AM EST by NWS",
  "msgtype":"Alert",
  "severity":"Moderate",
  "urgency":"Expected",
  "areas":"Calhoun; Lexington; Richland",
  "category":"Met",
  "certainty":"Likely",
  "event":"Flood Warning",
  "note":"Alert for Calhoun; Lexington; Richland (South Carolina) Issued by the National Weather Service",
  "effective":"2021-01-05T21:47:00-05:00",
  "expires":"2021-01-07T06:15:00-05:00",
  "desc":"...The Flood Warning continues for the following rivers in South\nCarolina...\nCongaree River At Carolina Eastman affecting Richland, Calhoun\nand Lexington Counties.\nCongaree River At Congaree National Park-Gadsden affecting\nCalhoun and Richland Counties.\nNorth Fork Edisto River At Orangeburg affecting Orangeburg County.\n...The Flood Warning is now in effect until Thursday morning...\nThe Flood Warning continues for\nthe Congaree River At Carolina Eastman.\n* Until Thursday morning.\n* At 9:28 PM EST Tuesday the stage was 115.6 feet.\n* Flood stage is 115.0 feet.\n* Minor flooding is occurring and minor flooding is forecast.\n* Recent Activity...The maximum river stage in the 24 hours ending\nat 9:28 PM EST Tuesday was 118.2 feet.\n* Forecast...The river will rise to 115.7 feet just after midnight\ntonight. It will then fall below flood stage tomorrow morning to\n114.2 feet and begin rising again tomorrow evening. It will rise\nto 114.3 feet early Thursday morning. It will then fall again and\nremain below flood stage.\n* Impact...At 115.0 feet, Flooding occurs in low lying areas of the\nCarolina Eastman Facility and at the Congaree National Park.\n* Flood History...This crest compares to a previous crest of 116.3\nfeet on 12/03/2020.\n&&",
  "instruction":"A Flood Warning means that flooding is imminent or occurring. All\ninterested parties should take necessary precautions immediately.\nMotorists should not attempt to drive around barricades or drive\ncars through flooded areas.\nCaution is urged when walking near riverbanks.\nAdditional information is available at www.weather.gov.\nThe next statement will be issued Wednesday morning at 1000 AM EST."
  }

} */
