import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {PipesModule} from './pipes/pipes.module';
import {AidTitlePipe} from './pipes/aid-title.pipe';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PipesModule],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    Geolocation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
