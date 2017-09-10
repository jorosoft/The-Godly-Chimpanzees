import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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

    addItemsObjects(item: any, collectionPath: string) {
        return firebase.database().ref(collectionPath).child(item).set(true);
    }

    addJSONToDB(ref: string, arr) {
        arr.forEach(element => {
            firebase.database().ref(ref).push(element);
        });
    }

    removeItem(collectionPath: string, listKey: string) {
        return firebase.database()
            .ref(collectionPath).child(listKey).set(false);
    }

    pushItems(item: any, collectionPath: string) {
        return this.db.list(collectionPath).push(item);
    }

    listItems(query: object, collectionPath: string) {
        return this.db.list(collectionPath, query).map((x) => x.map(y => y));
    }

    getItem(query: { key: string, value: string }, collectionPath: string) {
        const ref = firebase.database().ref(collectionPath).orderByChild(query.key).equalTo(query.value);
        return ref.once('value').then(snapshot => snapshot.val());
    }


    //    queryCollection(collectionName: string, queryParameter: Object) {
    //       return this.db.list(collectionName, queryParameter);
    //    }

    //    queryByKey(collectionName, key) {
    //        return this.db.object(`/${collectionName}/${key}`);
    //    }
}
