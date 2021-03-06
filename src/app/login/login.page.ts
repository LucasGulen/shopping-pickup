import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = { username: '', phone: '' };
  userForm: FormGroup;

  constructor(private router: Router, private tts: TextToSpeech) {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.pattern('^((\\\\+91-?)|0)?[0-9]{10}$'), Validators.required])
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const userConnected: User = JSON.parse(localStorage.getItem('userConnected'));
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

  onInformationPressed() {
    this.tts.speak({
      text: "Bienvenue sur notre application. Ici, vous pouvez vous connecter. Afin de vous identifier, " + 
      "nous avons besoin de connaître votre nom et numéro de téléphone.",
      locale: 'fr-FR',
    }).then(_ => console.log("Finished")).catch(_ => console.log("Error"));
  }

}
