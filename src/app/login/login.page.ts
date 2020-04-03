import { Component, OnInit } from '@angular/core';
import {Aid} from '../interfaces/Aid';
import {User} from '../interfaces/User';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { GeoPosition } from '../interfaces/GeoPosition';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {username : '', phone : ''};
  userForm: FormGroup;

  constructor(    private router: Router) {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('^((\\\\+91-?)|0)?[0-9]{10}$'), Validators.required])
    });
  }

  ngOnInit() {
    const pos1 = new GeoPosition(46.192802, 6.202916);
    const pos2 = new GeoPosition(46.203774, 6.222748);

    console.log("Distance entre les deux points" + pos2.distance(pos1));

  }

  ionViewWillEnter() {
    const userConnected: User =  JSON.parse(localStorage.getItem('userConnected'));
    // Check if user is already in local storage
    if (userConnected !== null) {
      // if yes, fill the fields
      this.user.username = userConnected.username;
      this.user.phone = userConnected.phone;
    } else {
      // if not, make sure to reset user fields in the view
      this.user.username = '';
      this.user.phone = '';
    }
  }

  saveUser() {
    localStorage.setItem('userConnected', JSON.stringify(this.user));
    this.router.navigateByUrl('choix-role');
  }

}
