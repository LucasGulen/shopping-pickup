import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {Status} from '../interfaces/Status';

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
            location: 'Genève',
            status: Status.CREATED
        };

        this.aids.push(aid);
    }

}
