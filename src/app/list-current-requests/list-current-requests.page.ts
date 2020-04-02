import {Component, OnInit} from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Request} from '../interfaces/Request';
import {Status} from '../interfaces/Status';

@Component({
  selector: 'app-list-current-requests',
  templateUrl: './list-current-requests.page.html',
  styleUrls: ['./list-current-requests.page.scss'],
})
export class ListCurrentRequestsPage implements OnInit {

  requests: Array<Request> = [
      {titre: 'Demande de provisions', photoUrl: '/assets/icon/shopping_cart.svg', status: Status.ACCEPTED, description: '1 plaque de chocolat noir, 1 Master, 2 boîtes de maïs'},
      {titre: 'Demande de provisions', photoUrl: '/assets/icon/shopping_cart.svg', status: Status.CREATED, description: '1 pizza familiale'},
      {titre: 'Problème informatique', photoUrl: '/assets/icon/pc.png', status: Status.DELIVERED, description: 'Mon ordinateur ne démarre plus et un écran noir apparaît à chaque démarrage.'}
  ];

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
  }

  getStatusName(statusNumber: number) {
      if (statusNumber === 0) {
          return 'Créé';
      } else if (statusNumber === 1) {
          return 'Accepté';
      } else if (statusNumber === 2) {
          return 'Livré / Terminé';
      } else if (statusNumber === 3) {
          return 'Payé';
      }
  }

}
