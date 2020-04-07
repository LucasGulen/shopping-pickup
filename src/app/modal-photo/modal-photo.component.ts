import {Component, OnInit, Sanitizer} from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.scss'],
})
export class ModalPhotoComponent implements OnInit {

  private photo = '';

  constructor(private modalCtrl: ModalController, private camera: Camera, private alertCtrl: AlertController, private loaderCtrl: LoadingController) { }

  ngOnInit() {}

  loadFromGallery() {
    this.openCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
  }


  takePhoto() {
    this.openCamera(this.camera.PictureSourceType.CAMERA);
  }

  async openCamera(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    const loader = await this.loaderCtrl.create({});
    loader.present();
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.photo = 'data:image/jpeg;base64,' + imageData;
      loader.dismiss();
    }, async (err) => {
      // Handle error
      const alert = await this.alertCtrl.create({
        header: 'Erreur',
        message: 'Une erreur est survenue lors de l\'utilisation de l\'appareil photo'
      });
      alert.present();
    });
  }

  dismiss() {
    this.modalCtrl.dismiss({photo: this.photo});
  }
}
