import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';  

@Component({
  selector: 'app-main-senior',
  templateUrl: './main-senior.page.html',
  styleUrls: ['./main-senior.page.scss'],
})
export class MainSeniorPage implements OnInit {

  constructor(private router: Router, private auth: AuthService, private tts: TextToSpeech) { }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
  }

  onNewDemandClick() {
    this.router.navigateByUrl('list-services-senior');
  }

  onCurrentRequestsClick() {
    this.router.navigateByUrl('list-current-requests');
  }

  onInformationPressed() {
    this.tts.speak({
      text: "Sur cette page vous pouvez choisir votre prochaine action. Appuyez sur le premier bouton si vous souhaitez " +
      "consulter vos demandes en cours de traitement. Appuyez sur le deuxième bouton si vous souhaitez effectuer une nouvelle "+
      "demande.",
      locale: 'fr-FR',
    }).then(_ => console.log("Finished")).catch(_ => console.log("Error"));
  }

}
