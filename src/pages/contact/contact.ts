import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{GiftplacePage}from '../giftplace/giftplace';
import{ GiftplacemodifyPage}from '../giftplacemodify/giftplacemodify';
import{IftarplacePage}from '../iftarplace/iftarplace';
import{IftarplacemodifyPage}from '../iftarplacemodify/iftarplacemodify';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';



 
 
 

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public authServiceProvider:AuthServiceProvider) {

  }
goTOAddGiftPage(){
  this.navCtrl.push(GiftplacePage)
  console.log('goTOAddGiftPage')


}
goTOAddIftarPage(){
  this.navCtrl.push(IftarplacePage)
  console.log('goTOAddIftarPage')
  
}
goTOShowGiftPage(){
  this.navCtrl.push(GiftplacemodifyPage)
  console.log('goTOShowGiftPage')
}
goTOShowIftartPage(){
  this.navCtrl.push(IftarplacemodifyPage)
  console.log('goTOShowIftartPage')
  
}


logout(){
  this.authServiceProvider.signOut();
  this.navCtrl.setRoot(LoginPage)
}



}
