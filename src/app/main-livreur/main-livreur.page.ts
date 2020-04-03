import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {Status} from '../interfaces/Status';
import {AidType} from '../interfaces/AidType';
import {GeoPosition} from '../interfaces/GeoPosition';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-main-livreur',
    templateUrl: './main-livreur.page.html',
    styleUrls: ['./main-livreur.page.scss'],
})
export class MainLivreurPage implements OnInit {

    private aids: Array<Aid> = new Array<Aid>();
    private displayedAids: Array<Aid> = new Array<Aid>();
    private location: GeoPosition;
    private aidTypes: Array<{}> = [];
    private selectedAidType = 0;
    private isSomeData = false;

    constructor(private geolocation: Geolocation) {
    }

    async ngOnInit() {
        const position = await this.geolocation.getCurrentPosition();
        this.location = new GeoPosition(position.coords.latitude, position.coords.longitude);
        this.populateData();
        const keys = Object.keys(AidType);
        const values = keys.splice(keys.length / 2, keys.length);
        keys.forEach((key, idx) => {
            this.aidTypes.push({
                id: key,
                value: values[idx]
            });
        });
    }


    populateData() {
        const storageAids: Array<Aid> = JSON.parse(localStorage.getItem('aids'));
        if (storageAids === null) {
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
        } else {
            storageAids.forEach( aid => aid.location = new GeoPosition(aid.location.latitude, aid.location.longitude))
            this.aids = storageAids;
        }
        this.sortArrayByLocation(this.aids);
        this.aids = this.filterArrayByStatus(this.aids);
        this.displayedAids = this.aids;
    }

    aidTypeChange() {
        if (this.selectedAidType == -1) {
            this.displayedAids = this.aids;
        } else {
            this.displayedAids = this.aids.filter((aid) => aid.aidType == this.selectedAidType);
        }
        // this.sortArrayByLocation()
    }

    takeAid(aid: Aid) {
        aid.aidUser = JSON.parse(localStorage.getItem('userConnected'));
        localStorage.setItem('notificationAid', JSON.stringify(aid));
        this.aids[this.aids.indexOf(aid)].status = Status.ACCEPTED;
        localStorage.setItem('aids', JSON.stringify(this.aids));
        this.aids = this.filterArrayByStatus(this.aids);
        this.displayedAids = this.aids;
    }

    filterArrayByStatus(arr: Array<Aid>) {
        arr = arr.filter( aid => aid.status !== Status.ACCEPTED);
        if (arr.length === 0) {
            this.isSomeData = false;
        } else {
            this.isSomeData = true;
        }
        return arr;
    }

    sortArrayByLocation(arr: Array<Aid>) {
        arr.sort((aid1, aid2) =>
            aid1.location.distance(this.location) - aid2.location.distance(this.location)
        );
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


}
