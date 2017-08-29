import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {
  displayUser: {displayName: string, uid: string};

  constructor(public afAuth: AngularFireAuth) {
  }


  register(newUser) {
     return this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then((user) => {
              const userAuth = firebase.auth().currentUser;
              userAuth.updateProfile({ displayName: newUser.username, photoURL: '' });
              this.displayUser = {displayName: newUser.username, uid: userAuth.uid};
              console.log(userAuth);
              return firebase.database().ref('users').push(newUser);
          });
  }

  logIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
              .then((user) => {
                this.displayUser = {displayName: user.displayName, uid: user.uid};
                return this.displayUser;
              })
              .catch(err => {
                throw err;
              });
  }

  getCurrenUser() {
    return this.displayUser;
  }
}
