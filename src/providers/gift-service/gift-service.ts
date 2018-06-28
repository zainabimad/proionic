import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ AngularFireDatabase} from 'angularfire2/database';
import{Locations} from '../../model/locations';



/*
  Generated class for the GiftServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GiftServiceProvider {
  private gpsListRef=this.db.list<Locations>('giftmap')

  constructor(public db:AngularFireDatabase) {
    console.log('Hello GiftServiceProvider Provider');
  }

  getLocationList(){
    return this.gpsListRef;

  }
  addLocation(locations:Locations){
    return this.gpsListRef.push(locations)
  }

  updateLocation(locations:Locations){
    return this.gpsListRef.update(locations.key,locations)
  }
  removeLocation(locations){
    return this.gpsListRef.remove(locations)
  }
}
