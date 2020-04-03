import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import {AlertController} from '@ionic/angular';
import {Aid} from '../interfaces/Aid';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-choix-role',
  templateUrl: './choix-role.page.html',
  styleUrls: ['./choix-role.page.scss'],
})
export class ChoixRolePage implements OnInit {

  constructor(private router: Router, private auth: AuthService, private alertController: AlertController) { }

  role;

  ngOnInit() {
    const notificationAid: Aid = JSON.parse(localStorage.getItem('notificationAid'));
    const userConnected: User = JSON.parse(localStorage.getItem('userConnected'));
    if (notificationAid !== null && userConnected.username == notificationAid.seniorUser.username) {
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
          handler: () => {
            localStorage.setItem('notificationAid', null);
          }
        }, {
          text: 'Ok',
          handler: () => {
            localStorage.setItem('notificationAid', null);
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
