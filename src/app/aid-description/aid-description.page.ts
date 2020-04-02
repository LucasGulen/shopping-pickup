import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AidType } from '../interfaces/AidType';
import { throwError } from 'rxjs';
import { Aid } from '../interfaces/Aid';
import { User } from '../interfaces/User';
import { Status } from '../interfaces/Status';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aid-description',
  templateUrl: './aid-description.page.html',
  styleUrls: ['./aid-description.page.scss'],
})
export class AidDescriptionPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private auth: AuthService, private alertController: AlertController) { }

  private aidType: AidType;

  private defaultValidateMessage: string = "Votre message a bien été enregistré !";

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.aidType) {
        this.aidType = params.aidType;
      } else {
        throwError("The aid description page did not receive the correct parameters. params.aidType.")
      }
    });
  }

  doLogout() {
    this.auth.logout();
  }

  onRecordingSelected() {
    
  }

  async onValidateSelected() {
    let aids: Array<Aid> = JSON.parse(localStorage.getItem("aids"));

    if (!aids) aids = new Array();

    const connectedUser: User = JSON.parse(localStorage.getItem("userConnected"));

    const aid: Aid = {
      id: 10,
      text: "Text",
      seniorUser: connectedUser,
      location: "To be implemented",
      status: Status.CREATED,
      aidType: this.aidType
    }

    aids.push(aid);

    localStorage.setItem("aids", JSON.stringify(aids));

    await this.showMessage(this.defaultValidateMessage);

    this.router.navigateByUrl("list-current-requests")
  }

  async showMessage(message: string) {
    const alert = await this.alertController.create({
      header: 'Message',
      message,
      buttons: ['OK']
    });

    alert.present();
    await alert.onDidDismiss();
  }
}
