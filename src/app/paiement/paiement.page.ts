import { Component, OnInit } from '@angular/core';

import { CardIO, CardIOResponse } from '@ionic-native/card-io/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';  

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
})
export class PaiementPage implements OnInit {

  private card = { cardNumber: null, expiry: null, cvv: null, cardHolderName: '', cardType: '' }
  userForm: FormGroup;

  constructor(private cardIO: CardIO, private alertController: AlertController, private auth: AuthService, private router: Router, private tts: TextToSpeech) {
    this.userForm = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      cardHolderName: new FormControl('', Validators.required),
      cardType: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  onScanningSelected() {
    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if (res) {
            let options = {
              requireExpiry: true,
              requireCVV: true,
              requirePostalCode: false,
              scanExpiry: true,
              requireCardholderName: true
            };
            this.cardIO.scan(options).then((cardResponse: CardIOResponse) => {
              this.payer("Paiement effectué !");
            });
          }
        }
      );
  }

  async payer(message: string) {
    const alert = await this.alertController.create({
      header: 'Message',
      message,
      buttons: ['OK']
    });

    alert.present();
    await alert.onDidDismiss();
  }

  doLogout() {
    this.auth.logout();
  }

  onInformationPressed() {
    this.tts.speak({
      text: "Cette page vous aidera à payer. Appuyez sur le bouton 'Scanner votre carte' pour ouvrir votre caméra et vous aider " +
      "à plus facilement rentrer les informations de votre carte. La photo de votre carte n'est pas enregistrée ! Si le scan "+ 
      "n'arrive pas à trouver tous les éléments sur l'image, il vous demandera de rentrer les valeurs vous-même.",
      locale: 'fr-FR',
    }).then(_ => console.log("Finished")).catch(_ => console.log("Error"));
  }

}
