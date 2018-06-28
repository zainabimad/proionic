import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{Locations} from '../../model/locations';
import{GiftServiceProvider} from '../../providers/gift-service/gift-service';
import{AngularFireDatabase,AngularFireObject} from 'angularfire2/database';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the GiftplacemodifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giftplacemodify',
  templateUrl: 'giftplacemodify.html',
})
export class GiftplacemodifyPage {
  giftList:AngularFireObject<any>;
  locations:Locations={
    latitude:'',
    longitude:'',
    info:'',
  }
  itemArray=[];
  myObject=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public giftServiceProvider:GiftServiceProvider,public alertCtrl: AlertController,db:AngularFireDatabase) {
//     this.giftList=this.giftServiceProvider.getLocationList()
//     .snapshotChanges().map(
//     (changes=>{
// return changes.map(c=>({
//   key:c.payload.key, ...c.payload.val()
// }))
//     }))
this.giftList=db.object('giftmap');
this.giftList.snapshotChanges().subscribe(action=>{
  // let y=action.payload.toJSON( )
  // y['key']=action.key
  if(action.payload.val()==null ||action.payload.val()==undefined){
    console.log('nodata')
  } else{
  this.itemArray.push(action.payload.val()as Locations)
  console.log(this.itemArray)
  this.myObject=Object.entries(this.itemArray[0])
  console.log(this.myObject)
}}
  
 ) }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftplacemodifyPage');
  }


  updateLocation(locations:Locations){
    this.giftServiceProvider.updateLocation(locations).then(()=>{
      this.navCtrl.setRoot(ContactPage)
      console.log('update')
    })
  }
  removeLocation(locations:Locations){
    this.giftServiceProvider.removeLocation(locations).then(()=>{
      this.navCtrl.setRoot(ContactPage)

      console.log('delete')
   })
  } 











  showPrompt(key,info,latitude,longitude) {
    const prompt = this.alertCtrl.create({
      title: 'تعديل',
      message: "التعديل على المعلومات الحالية",
      inputs: [
        {
          name: 'Info',
          value: info
        },
        {
          name: 'Latitude',
          value:latitude 
        },
        {
          name: 'Longitude',
          value: longitude
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            // console.log('Saved clicked');
            this.locations.info= data.Info
            this.locations.latitude= data.Latitude
            this.locations.longitude= data.Longitude
            this.locations.key=key
            this.updateLocation( this.locations)
          }
        }
      ]
    });
    prompt.present();
  }







} 
