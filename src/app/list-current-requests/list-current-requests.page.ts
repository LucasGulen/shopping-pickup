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
      {titre: '', photoUrl: '', status: Status.ACCEPTED},
      {titre: '', photoUrl: '', status: Status.ACCEPTED},
      {titre: '', photoUrl: '', status: Status.ACCEPTED}
  ];

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
  }

}
