import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {ActivatedRoute} from '@angular/router';
import {GeoPosition} from '../interfaces/GeoPosition';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {ModalPhotoComponent} from '../modal-photo/modal-photo.component';
import {Status} from '../interfaces/Status';
import {User} from '../interfaces/User';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-demande-details-livreur',
    templateUrl: './demande-details-livreur.page.html',
    styleUrls: ['./demande-details-livreur.page.scss'],
})
export class DemandeDetailsLivreurPage implements OnInit {

    aid: Aid;
    userConnected: User;
    alreadyAccepted = false;
    location: GeoPosition = new GeoPosition(-1, -1);
    aids: Array<Aid> = new Array<Aid>();

   constructor(private route: ActivatedRoute,
               private geoLocation: Geolocation,
               private alertController: AlertController,
               private modalController: ModalController,
               private toastCtrl: ToastController,
               private storage: Storage) {
        route.queryParams.subscribe(params => {
            this.userConnected = JSON.parse(localStorage.getItem('userConnected'));
            this.aid = JSON.parse(params.aid);
            this.aid.location = new GeoPosition(this.aid.location.latitude, this.aid.location.longitude);
            this.aids = JSON.parse(params.aids);
            this.aids.forEach(currAid => {
                currAid.location = new GeoPosition(currAid.location.latitude, currAid.location.longitude);
            });
            this.aid.status > 0 && this.aid.aidUser.username ==  this.userConnected.username ? this.alreadyAccepted = true : this.alreadyAccepted = false;
        });
    }

    async ngOnInit() {
        const position = await this.geoLocation.getCurrentPosition();
        this.location = new GeoPosition(position.coords.latitude, position.coords.longitude);
    }

    toggleAccept() {
        this.alreadyAccepted = !this.alreadyAccepted;
    }

    async takeAid(aid: Aid) {
        const alert = await this.alertController.create({
            header: 'Aider quelqu\'un',
            message: 'Vous-êtes sur le point d\'aider <strong>' + aid.seniorUser.username + '</strong>. Veuillez suivre les recommandations d\'hygiène !',
            buttons: [
                {
                    text: 'Je ne suis qu\'un méchant',
                    role: 'cancel',
                    cssClass: 'secondary',
                }, {
                    text: 'Je suis sur de ce que je fais',
                    cssClass: 'success',
                    handler: async _ => {
                        const toast = await this.toastCtrl.create({
                            duration: 2000,
                            header: 'Vous avez décidé d\'aider ' + aid.seniorUser.username,
                            message: 'Merci pour votre aide !',
                            cssClass: 'toast-center'
                        });
                        await toast.present();
                        localStorage.setItem('notificationAid', JSON.stringify(aid));
                        this.aids.map(currAid => {
                            if (currAid.id === aid.id) {
                                // modify elem
                                currAid.status = Status.ACCEPTED;
                                currAid.aidUser = JSON.parse(localStorage.getItem('userConnected'));
                            }
                        });
                        localStorage.setItem('aids', JSON.stringify(this.aids));
                        this.toggleAccept();
                    }
                }
            ]
        });
        await alert.present();
    }

    async showAlert() {
        const alert = await this.alertController.create({
            header: 'Clôture de la demande',
            // tslint:disable-next-line:max-line-length
            message: 'Pour pouvoir mettre fin à cette demande, une photo du ticket de caisse ou tout autre preuve de paiement te sera demandée à l\'étape qui suit.',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Accepter',
                    handler: () => {
                        this.openModalPhoto();
                    }
                }
            ]
        });
        await alert.present();
        return alert.onDidDismiss();
    }

    async openModalPhoto() {
        const modal = await this.modalController.create({
            component: ModalPhotoComponent,
            swipeToClose: true
        });

        modal.onDidDismiss()
            .then(async data => {
                if (data.data !== undefined) {
                    if (data.data.photo !== '') {
                        let photos = await this.storage.get('photos');
                        if (photos == null) {
                            photos = new Array<string>();
                        }
                        photos.push(data.data.photo);
                        await this.storage.set('photos', photos);
                        this.aids.map(currentAid => {
                            if (currentAid.id === this.aid.id) {
                                currentAid.photo = photos.length - 1;
                                currentAid.status = Status.DELIVERED;
                            }
                            return currentAid;
                        });
                        localStorage.setItem('aids', JSON.stringify(this.aids));
                    }
                }
            });
        return await modal.present();
    }

}
