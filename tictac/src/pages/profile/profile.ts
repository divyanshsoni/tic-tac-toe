import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public myphoto='';
  constructor(public navCtrl: NavController, private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getPicture()
  {
    const options:CameraOptions={
      quality:70,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE

    }
    this.camera.getPicture(options).then((imageData)=>{
      this.myphoto='data:image/jpeg;base64,'+imageData;
    },(err)=>{

    });
  }
  choosePicture()
  {
    const options:CameraOptions={
      quality:70,
      destinationType:this.camera.DestinationType.DATA_URL,
      
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false

    }
    this.camera.getPicture(options).then((imageData)=>{
      this.myphoto='data:image/jpeg;base64,'+imageData;
    },(err)=>{

    });

  }
}
