import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-main-senior',
  templateUrl: './main-senior.page.html',
  styleUrls: ['./main-senior.page.scss'],
})
export class MainSeniorPage implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
  }

  onNewDemandClick() {
    this.router.navigateByUrl('list-services-senior');
  }

  onCurrentRequestsClick() {
    this.router.navigateByUrl('list-current-requests');
  }

}
