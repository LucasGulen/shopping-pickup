import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-choix-role',
  templateUrl: './choix-role.page.html',
  styleUrls: ['./choix-role.page.scss'],
})
export class ChoixRolePage implements OnInit {

  constructor(private router: Router, private auth: AuthService, private alertController: AlertController) { }

  role;

  ngOnInit() {
    localStorage.setItem('notification', 'false');
    const mustNotify = JSON.parse(localStorage.getItem('notification'));
    if (mustNotify) {
      this.notification();
    }
  }

  onSeniorSelected() {
    this.router.navigateByUrl('main-senior');
  }

  onHelpSelected() {
    this.router.navigateByUrl('main-livreur');
  }

  async notification() {
    const alert = await this.alertController.create({
      header: 'Notification',
      message: 'Le statut d\'une de tes demandes à évoluer, clique sur "ok" pour aller voir !',
      buttons: [
        {
          text: 'Non merci',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl('list-current-requests');
          }
        }
      ]
    });
    await alert.present();
    return alert.onDidDismiss();
  }

/*
  async askConfirmation(message: string, elem) {
    const alert = await this.alertController.create({
      header: 'Validation avant paiement',
      message: 'En acceptant, tu valides avoir bien reçu la livraison et tu pourras passer à l\'étape de paiement de ta commande',
      buttons: [
        {
          text: 'Refuser',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Show phone number of aid person to contact him
            this.showPhoneNumberAid(elem.getAttribute('data-aidUserPhone'));
          }
        }, {
          text: 'Accepter',
          handler: () => {
            this.router.navigateByUrl('paiement');
          }
        }
      ]
    });
    await alert.present();
    return alert.onDidDismiss();
  }
*/
  doLogout() {
    this.auth.logout();
  }
}
