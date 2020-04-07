import {Component, OnInit} from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {ActivatedRoute, NavigationExtras, Route} from '@angular/router';

@Component({
    selector: 'app-demande-details-livreur',
    templateUrl: './demande-details-livreur.page.html',
    styleUrls: ['./demande-details-livreur.page.scss'],
})
export class DemandeDetailsLivreurPage implements OnInit {

    aid: Aid;

    constructor(private route: ActivatedRoute) {
        route.queryParams.subscribe(params => {
          this.aid = JSON.parse(params.aid);
        });
    }

    ngOnInit() {
    }

    

}
