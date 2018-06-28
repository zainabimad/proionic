import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{Locations} from '../../model/locations';
import { IftarServiceProvider } from '../../providers/iftar-service/iftar-service';





/**
 * Generated class for the IftarplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iftarplace',
  templateUrl: 'iftarplace.html',
})
export class IftarplacePage {
  locations:Locations={
    latitude:'',
    longitude:'',
    info:'',
  }


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public iftarServiceProvider:IftarServiceProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IftarplacePage');
  }



  addLocation(locations:Locations){
    this.iftarServiceProvider.addLocation(locations).then(ref=>{
this.showAlert()
this.navCtrl.pop()
    })
    
  }





  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Greate',
      subTitle: 'Thank  for helping',
      buttons: ['OK']
    });
    alert.present();
  }





}
