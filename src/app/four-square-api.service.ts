import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { FourSquareComponent } from './four-square';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FourSquareAPIService {
  CLIENT_ID: string = 'HWDQECDA0T20AJMSMNQUHU21QKEANAJCL1XGNT2GJRLKB3UG';
    CLIENT_SECRET: string = '1IUVXAV5D1BFKXP5A1JFUNVZQXCVT304TS4MGCVKRYJECGHE';
    PUSH_SECRET: string;
    Push_Url: string;
    EndPoint: string;
    key: string;
    params = 'near=New+York+University'; 
    Base_URL = 'https://api.foursquare.com/v2/';
    URL: string = null;
    venues: any;
  constructor(private http: Http) {
      this.PUSH_SECRET ='RVYEDFK2UT2IJT4PWTKHG44NABEGV15R01D1HKAGZWPOTTVQ';
      this.key = '&client_id=' + this.CLIENT_ID + '&client_secret=' + this.CLIENT_SECRET + '&v=' + '20170713';
  }

  mountEndPoint(lat, lng){
      this.EndPoint = 'venues/explore?limit=50&ll=' + lat + ',' + lng;
      return this.EndPoint;
  }
  getPlaces(lat, lng, query): Promise<any>{
    this.URL = this.Base_URL + this.mountEndPoint(lat,lng)+this.key+'&query='+query+'';
    console.log("URL= " + this.URL);
    return this.http.get(this.URL)
               .toPromise();
              /* .then((res) => {
                  res.json();
                 console.log('Resposta do service!');
                // console.log(venues);
              })
              .catch(this.handleError); */ 
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getVenues(){
    return this.venues;
  }
}
