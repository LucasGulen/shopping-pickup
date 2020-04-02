import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import {AuthService} from '../providers/auth.service';
import { Status } from '../interfaces/Status';
import { AidType } from '../interfaces/AidType';


@Component({
  selector: 'app-list-services-senior',
  templateUrl: './list-services-senior.page.html',
  styleUrls: ['./list-services-senior.page.scss'],
})
export class ListServicesSeniorPage implements OnInit {

  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.auth.logout();
  }

  onShoppingSelected() {
    this.router.navigate(['aid-description'], this.getNavigationExtras(AidType.SHOPPING));
  }

  onITSelected() {
    this.router.navigate(['aid-description'], this.getNavigationExtras(AidType.IT));
  }

  getNavigationExtras(aidType : AidType) : NavigationExtras {
    return {
      queryParams: {
        aidType
      }
    };  
  }

}
