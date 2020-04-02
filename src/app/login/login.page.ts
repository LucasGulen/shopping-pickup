import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userTelephone: string;
  userUsername: string;

  constructor() { }

  ngOnInit() {
  }

  searchTelephoneNumber() {
    const telephone =  localStorage.getItem('telephone');
    console.log(telephone);
  }

  saveTelephoneNumber() {
    localStorage.setItem('telephone', this.userTelephone);
    localStorage.setItem('username', this.userUsername)
    console.log(this.userTelephone);
    console.log(this.userTelephone);
  }

}
