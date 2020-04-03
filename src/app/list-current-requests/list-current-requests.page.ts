import {Component, OnInit} from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Status} from '../interfaces/Status';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Aid} from '../interfaces/Aid';
import {User} from '../interfaces/User';
import {GeoPosition} from '../interfaces/GeoPosition';
import {AidType} from '../interfaces/AidType';

@Component({
    selector: 'app-list-current-requests',
    templateUrl: './list-current-requests.page.html',
    styleUrls: ['./list-current-requests.page.scss'],
})
export class ListCurrentRequestsPage implements OnInit {

    staticAidUser: User = {
        username: 'Flavieaux',
        phone: '0789876789'
    };

    seniorUser: User;
    aids: Array<Aid>;
    defaultValidateMessage = '';

    constructor(private auth: AuthService, private router: Router, private alertController: AlertController) {
        this.seniorUser = JSON.parse(localStorage.getItem('userConnected'));
        this.setDefaultStaticAidRequests();
    }

    ngOnInit() {
    }

    setDefaultStaticAidRequests() {
        this.aids = [
            {
                id: 120,
                text: '1 plaque de chocolat noir, 1 Master, 2 boîtes de maïs',
                seniorUser: this.seniorUser,
                aidUser: this.staticAidUser,
                location: new GeoPosition(46, 6),
                status: Status.ACCEPTED,
                aidType: AidType.SHOPPING
            },
            {
                id: 121,
                text: '2 boîtes de raviolis, 1 paquet de bouillon de poule, 100kg de chocolot blanc anti confinement',
                seniorUser: this.seniorUser,
                aidUser: this.staticAidUser,
                location: new GeoPosition(46, 6),
                status: Status.DELIVERED,
                aidType: AidType.SHOPPING
            },
            {
                id: 122,
                text: 'J\'ai mon ordinateur qui ne veut plus s\'allumer et j\'aurais besoin d\'assistance',
                seniorUser: this.seniorUser,
                aidUser: this.staticAidUser,
                location: new GeoPosition(46, 6),
                status: Status.CREATED,
                aidType: AidType.IT
            }
    ];
        this.sortAidList();
    }

    doLogout() {
        this.auth.logout();
    }

    isPaymentNeeded(statusNumber: number) {
        return statusNumber === Status.DELIVERED;
    }

    async goToPayment(elem) {
        await this.askConfirmation(this.defaultValidateMessage, elem.el);
    }

    getStatusName(statusNumber: number) {
        if (statusNumber === 0) {
            return 'Créé';
        } else if (statusNumber === 1) {
            return 'Accepté';
        } else if (statusNumber === 2) {
            return 'A payer';
        } else if (statusNumber === 3) {
            return 'Payé';
        }
    }

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

    async showPhoneNumberAid(aideUserPhone: string) {
        const alert = await this.alertController.create({
            header: 'Message',
            message: 'Si tu n\'as pas reçu la livraison, tu peux joindre le livreur à ce numéro : ' + aideUserPhone,
            buttons: ['OK']
        });

        alert.present();
        await alert.onDidDismiss();
    }

    sortAidList() {
        this.aids = this.aids.sort((aidA, aidB) => aidB.status - aidA.status);
    }

}
