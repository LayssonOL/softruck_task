import { Component } from '@angular/core';
import { FourSquareAPIService } from './four-square-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'SofTruck Map';
  venues: any;
  query: string;
   lat: number;
  lng: number;
  venueResults = [];
  constructor(private fsService: FourSquareAPIService){}

  /* placePosition($event){
      console.log('Latitude = ' +  $event.coords.lat);
      console.log('Longitude = ' + $event.coords.lng);
  } */

  myQuery($event){
    this.query = $event.target.value;
  }
  submit($event){
    this.query = $event.target.value;
      console.log("My query: " + this.query);
      $event.preventDefault();
      if (!this.lat) {
          navigator.geolocation.getCurrentPosition((location) => {
            this.lat = location.coords.latitude;
            this.lng = location.coords.longitude;
            console.log(this.lat);
            console.log(this.lng);
            this.fsService.getPlaces(this.lat,this.lng,this.query).then((res) => {
              this.venues = res.json().response.groups[0].items;
              console.log(this.venues);
              this.organizeVenues();
              console.log(this.venueResults);
            });
            
          });
      } else {
          window.alert('We need yout location to sugestted you the best places near you!');
      }
    };

    organizeVenues(){
      var str,newstr;
      var newven = { name: null, icon: null , phone: null , address: null,rating: null, lat: null, lng: null};
      var appendeddatahtml;
      this.venues.forEach(venue => {
        newven.name = venue.venue.name;
        if(venue.venue.categories[0]){
          str = venue.venue.categories[0].icon.prefix;
          newstr = str.substring(0, str.length - 1);
          newven.icon = newstr + venue.venue.categories[0].icon.suffix;
        } else {
          newven.icon = "";
        }

        if (venue.venue.contact.formattedPhone) {
                newven.phone = venue.venue.contact.formattedPhone;
            } else {
                newven.phone = "";
            }
            
            if (venue.venue.location.address) {
                newven.address = venue.venue.location.address;
                newven.lat = venue.venue.location.lat;
                newven.lng = venue.venue.location.lng;
            } else {
                newven.address = "";
            }
            
            if (venue.venue.rating) {
                newven.rating = venue.venue.rating;
            }
            this.venueResults.push(newven);
      });
    }
}
