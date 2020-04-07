import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PipesModule } from './pipes/pipes.module';
import { AidTitlePipe } from './pipes/aid-title.pipe';
import { CardIO } from '@ionic-native/card-io/ngx';
import { ModalPhotoComponent } from './modal-photo/modal-photo.component';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule, Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, ModalPhotoComponent],
  entryComponents: [ModalPhotoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PipesModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    Geolocation,
    Camera,
    CardIO,
    TextToSpeech,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
