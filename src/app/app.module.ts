import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from "@angular/http";
import {FourSquareAPIService} from './four-square-api.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqq67YtAO4pgMBcJWe936qyTyUOi1Y_qs'
    })
  ],
  providers: [FourSquareAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
