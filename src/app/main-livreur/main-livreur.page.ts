import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-livreur',
    templateUrl: './main-livreur.page.html',
    styleUrls: ['./main-livreur.page.scss'],
})
export class MainLivreurPage implements OnInit {

    private aids: Array<Aid>;

    constructor() {
    }

    ngOnInit() {

      const aid: Aid = {
        id: 1,
        text: 'Salut c\'est moi',
        phoneNumber: '000',
        location: 'Genève'
      };


      this.aids.push(aid);

    }

}
