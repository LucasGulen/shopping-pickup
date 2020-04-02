import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {Status} from '../interfaces/Status';
import { AidType } from '../interfaces/AidType';
<<<<<<< HEAD
import { GeoPosition } from '../interfaces/GeoPosition';
=======
import {GeoPosition} from '../interfaces/GeoPosition';
>>>>>>> f700bb62a3c25565e8f64f15c447021555cc15af

@Component({
    selector: 'app-main-livreur',
    templateUrl: './main-livreur.page.html',
    styleUrls: ['./main-livreur.page.scss'],
})
export class MainLivreurPage implements OnInit {

    private aids: Array<Aid> = new Array<Aid>();

    constructor() {
    }

    ngOnInit() {
        const aid: Aid = {
            id: 1,
            text: 'Salut c\'est moi',
            seniorUser: {username: 'Flavieaux', phone: '121843960'},
            aidUser: {username: 'Loïque', phone: '121843960'},
            location: new GeoPosition(46, 6),
            status: Status.CREATED,
            aidType: AidType.SHOPPING,
        };

        this.aids.push(aid);
    }

}
