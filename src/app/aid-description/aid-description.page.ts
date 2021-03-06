import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../providers/auth.service';
import {AidType} from '../interfaces/AidType';
import {throwError} from 'rxjs';
import {Aid} from '../interfaces/Aid';
import {User} from '../interfaces/User';
import {Status} from '../interfaces/Status';
import {AlertController} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {GeoPosition} from '../interfaces/GeoPosition';
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';  

@Component({
    selector: 'app-aid-description',
    templateUrl: './aid-description.page.html',
    styleUrls: ['./aid-description.page.scss'],
})
export class AidDescriptionPage implements OnInit {

    @ViewChild('textarea', {static: true}) textarea;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private auth: AuthService,
                private alertController: AlertController,
                private geolocation: Geolocation,
                private speechRecognition: SpeechRecognition,
                private zone: NgZone,
                private tts: TextToSpeech) {
    }

    private aidType: AidType;
    private aidText = '';

    private defaultValidateMessage = 'Votre message a bien été enregistré !';
    private recording = false;

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params && params.aidType) {
                this.aidType = params.aidType;
            } else {
                throwError('The aid description page did not receive the correct parameters. params.aidType.');
            }
        });

        this.getPermission();
    }

    focusTextarea() {
        this.textarea.setFocus();
    }

    doLogout() {
        this.auth.logout();
    }

    onRecordingSelected() {
        if (this.recording) {
            this.stopListening();
        } else {
            this.startListening();
        }
    }

    async onValidateSelected() {
        let aids: Array<Aid> = JSON.parse(localStorage.getItem('aids'));

        if (!aids) {
            aids = new Array();
        }

        const connectedUser: User = JSON.parse(localStorage.getItem('userConnected'));

        const currentPosition = await this.geolocation.getCurrentPosition();
        console.log(currentPosition)

        const location = new GeoPosition(currentPosition.coords.latitude, currentPosition.coords.longitude);

        const uniqueId = this.getNewId();

        const aid: Aid = {
            id: uniqueId,
            text: this.aidText,
            seniorUser: connectedUser,
            aidUser: null,
            location,
            status: Status.CREATED,
            aidType: this.aidType
        };

        aids.push(aid);

        localStorage.setItem('aids', JSON.stringify(aids));

        await this.showMessage(this.defaultValidateMessage);

        this.aidText = '';
        this.router.navigateByUrl('list-current-requests');
    }

    getNewId(): number {
        const tmpAids: Array<Aid> = JSON.parse(localStorage.getItem('aids'));
        let maxId = -1;
        if (tmpAids !== null) {
            tmpAids.forEach( currAid => {
                if (currAid.id > maxId) {
                    maxId = currAid.id;
                }
            });
            return maxId + 1;
        } else {
            return 1;
        }
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

    stopListening() {
        this.speechRecognition.stopListening().then(() => {
            this.recording = false;
        });
    }

    getPermission() {
        this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
                if (!hasPermission) {
                    this.speechRecognition.requestPermission();
                }
            });
    }

    startListening() {
        this.speechRecognition.startListening().subscribe(matches => {
            this.updateText(matches[0]);
        });
        this.recording = true;
    }

    updateText(text) {
        this.zone.run(() => {
            this.aidText += text;
        });
    }

    onInformationPressed() {
        this.tts.speak({
          text: "Cette page vous permet de détailler votre demande. Appuyez sur le champ 'Notes' pour écrire votre" + 
          " demande ou appuyez sur le bouton 'Enregistrer sa voix' pour dicter à votre téléphone et il écrira votre " + 
          "demande pour vous. Enfin, appuyez sur le bouton 'Valider la demande' une fois satisfait de votre description.",
          locale: 'fr-FR',
        }).then(_ => console.log("Finished")).catch(_ => console.log("Error"));
      }
}
