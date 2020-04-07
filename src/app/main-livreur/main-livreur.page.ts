import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {Status} from '../interfaces/Status';
import {AidType} from '../interfaces/AidType';
import {GeoPosition} from '../interfaces/GeoPosition';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {AlertController, ToastController} from '@ionic/angular';
import {AuthService} from '../providers/auth.service';
import {NavigationExtras, Router} from '@angular/router';
import {User} from '../interfaces/User';

@Component({
    selector: 'app-main-livreur',
    templateUrl: './main-livreur.page.html',
    styleUrls: ['./main-livreur.page.scss'],
})
export class MainLivreurPage implements OnInit {

    private aids: Array<Aid> = null;
    private displayedAids: Array<Aid> = new Array<Aid>();
    private location: GeoPosition;
    private isSomeData = false;
    private aidTypes: Array<number> = [];
    private selectedAidType = -1;
    private connectedUser: User;

    constructor(private geolocation: Geolocation,
                private toastCtrl: ToastController,
                private alertCtrl: AlertController,
                private auth: AuthService,
                private router: Router) {
        this.connectedUser = JSON.parse(localStorage.getItem('userConnected'));
    }

    async ngOnInit() {
        const position = await this.geolocation.getCurrentPosition();
        this.location = new GeoPosition(position.coords.latitude, position.coords.longitude);
        this.populateData();
        const keys = Object.keys(AidType);
        // tslint:disable-next-line:radix
        this.aidTypes = keys.splice(0, keys.length / 2).map((id) => parseInt(id));
    }


    populateData() {
        this.aids = JSON.parse(localStorage.getItem('aids'));
        if (this.aids === null) {
            for (let i = 0; i < 10; i++) {
                const aid: Aid = {
                    id: i,
                    text: 'Ceci est la description de la demande.',
                    seniorUser: {username: 'Flavio', phone: '121843960'},
                    location: new GeoPosition(this.randomIntFromInterval(10, 40), 6),
                    status: Status.CREATED,
                    aidType: 0,
                };
                switch (this.randomIntFromInterval(0, 2)) {
                    case 0:
                        aid.aidType = AidType.IT;
                        break;
                    case 1:
                        aid.aidType = AidType.SHOPPING;
                        break;
                    case 2:
                        aid.aidType = AidType.ANIMALS;
                        break;
                }
                this.aids.push(aid);
            }
            this.sortArrayByLocation(this.aids);
            this.displayedAids = this.aids;
        } else {
            this.aids.forEach( aid => {
                aid.location = new GeoPosition(aid.location.latitude, aid.location.longitude);
            });
            console.log(this.aids)
            this.sortArrayByLocation(this.aids);
            this.displayedAids = this.aids;
            this.displayedAids = this.displayedAids.filter(currAid => currAid.aidUser == null || currAid.aidUser.username === this.connectedUser.username );
        }
        this.checkDataExist();
    }

    aidTypeChange() {
        if (this.selectedAidType == -1) {
            this.displayedAids = this.aids;
        } else {
            this.displayedAids = this.aids.filter((aid) => aid.aidType == this.selectedAidType);
        }
        // this.sortArrayByLocation()
    }

    checkDataExist() {
        if (this.displayedAids.length === 0) {
            this.isSomeData = false;
        } else {
            this.isSomeData = true;
        }
    }

    showDetails(aid: Aid) {
        this.router.navigate(['demande-details-livreur'], this.getNavigationExtras(aid));
    }

    getNavigationExtras(aid: Aid): NavigationExtras {
        return {
            queryParams: {
                aid: JSON.stringify(aid),
                aids: JSON.stringify(this.aids)
            }
        };
    }

    sortArrayByLocation(arr: Array<Aid>) {
        arr.sort((aid1, aid2) =>
            aid1.location.distance(this.location) - aid2.location.distance(this.location)
        );
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    doLogout() {
        this.auth.logout();
    }


}
