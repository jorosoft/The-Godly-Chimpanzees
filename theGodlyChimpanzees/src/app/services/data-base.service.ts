import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataBaseService {
  items: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase) { }

   getItems(collectionPath: string) {
       return this.items = this.db.list(collectionPath);
   }

   getItemsPromise(collectionPath: string) {
    return firebase.database().ref(collectionPath).once('value');
  }

  updateItems(collectionPath: string, key: string, data: Object) {
       this.items = this.getItems(collectionPath);
       return this.items.update(key, data);
  }

  addItems(item: any, collectionPath: string) {
    return firebase.database().ref(collectionPath).set(item);
  }

}






//    queryCollection(collectionName: string, queryParameter: Object) {
//       return this.db.list(collectionName, queryParameter);
//    }

//    queryByKey(collectionName, key) {
//        return this.db.object(`/${collectionName}/${key}`);
//    }
// }