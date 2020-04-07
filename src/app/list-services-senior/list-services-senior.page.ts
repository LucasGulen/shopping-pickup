import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import {AidType} from '../interfaces/AidType';



@Component({
  selector: 'app-list-services-senior',
  templateUrl: './list-services-senior.page.html',
  styleUrls: ['./list-services-senior.page.scss'],
})
export class ListServicesSeniorPage implements OnInit {

  private services: Array<Number> = [];

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    const keys = Object.keys(AidType);
    // tslint:disable-next-line:radix
    this.services = keys.splice(0, keys.length / 2).map((id) => parseInt(id));
    console.log(this.services)
  }

  doLogout() {
    this.auth.logout();
  }

  onSelect(service: number) {
    this.router.navigate(['aid-description'], this.getNavigationExtras(service));
  }

  getNavigationExtras(aidType: number): NavigationExtras {
    return {
      queryParams: {
        aidType
      }
    };
  }

}
