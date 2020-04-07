import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import {AidType} from '../interfaces/AidType';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';  


@Component({
  selector: 'app-list-services-senior',
  templateUrl: './list-services-senior.page.html',
  styleUrls: ['./list-services-senior.page.scss'],
})
export class ListServicesSeniorPage implements OnInit {

  private services: Array<Number> = [];

  constructor(private router: Router, private auth: AuthService, private tts: TextToSpeech) { }

  ngOnInit() {
    const keys = Object.keys(AidType);
    // tslint:disable-next-line:radix
    this.services = keys.splice(0, keys.length / 2).map((id) => parseInt(id));
    console.log(this.services)
  }

  doLogout() {
    this.auth.logout();
  }

  onSelect(service: number) {
    this.router.navigate(['aid-description'], this.getNavigationExtras(service));
  }

  getNavigationExtras(aidType: number): NavigationExtras {
    return {
      queryParams: {
        aidType
      }
    };
  }

  onInformationPressed() {
    this.tts.speak({
      text: "Sur cette page vous pouvez choisir quel type de service vous cherchez. Appuyez sur le premier bouton si vous avez " +
      "besoin d'aide en informatique. Par exemple, si vous avez une question en rapport avec votre téléphone ou votre ordinateur. " +
      "Appuyez sur le deuxième bouton pour une aide en lien avec des courses. Par exemple, si vous avez besoin que quelqu'un " + 
      "passe au supermarché ou à la pharmacie. Appuyez sur le troisième bouton si vous avez besoin d'aide avec vos animaux de " + 
      "compagnie. Par exemple, si quelqu'un doit sortir votre chien.",
      locale: 'fr-FR',
    }).then(_ => console.log("Finished")).catch(_ => console.log("Error"));
  }

}
