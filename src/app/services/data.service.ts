import { Injectable } from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataService{

  itemCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(public afs: AngularFirestore){
    this.items = this.afs.collection('Restaurants').valueChanges();
  }
  getRestaurants(){
    return this.items;
  }


}
