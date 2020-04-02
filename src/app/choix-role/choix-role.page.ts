import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-choix-role',
  templateUrl: './choix-role.page.html',
  styleUrls: ['./choix-role.page.scss'],
})
export class ChoixRolePage implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  role;

  ngOnInit() {

  }

  onSeniorSelected() {
    this.router.navigateByUrl('main-senior');
  }

  onHelpSelected() {
    this.router.navigateByUrl('main-livreur');
  }

  doLogout() {
    this.auth.logout();
  }
}
