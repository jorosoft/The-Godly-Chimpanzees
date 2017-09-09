import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { DataBaseService } from './data-base.service';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class UsersService {
  public displayUser: {displayName: string, uid: string};
  public userAuth;
  userA: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public dataBaseService: DataBaseService,
    public toastr: ToastsManager
  ) {
    this.userA = afAuth.authState;
  }

  register(newUser) {
     return this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
          .then((user) => {
              this.userAuth = firebase.auth().currentUser;
              this.userAuth.updateProfile({ displayName: newUser.username, photoURL: '' });
              this.displayUser = {displayName: newUser.username, uid: this.userAuth.uid};
              localStorage.setItem('displayUser', JSON.stringify({displayName: newUser.username, uid: user.uid}));

              console.log(this.userAuth);
              return firebase.database().ref('users/').child(user.uid).set(newUser);
          });
  }

  logIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
              .then((user) => {
                this.userAuth = firebase.auth().currentUser;
                this.displayUser = {displayName: user.displayName, uid: user.uid};
                localStorage.setItem('displayUser', JSON.stringify({displayName: user.displayName, uid: user.uid}));
                this.toastr.success('Login Success!');
                return this.displayUser;
              })
              .catch(err => {
                this.toastr.error(err.message);
                throw err;
              });
  }

  logOut() {
    this.toastr.success('Logout Sucess!');

    return firebase.auth().signOut();
  }

  getCurrenUser() {
    this.userAuth = firebase.auth().currentUser;
    if (!this.userAuth) {
      localStorage.clear();
    }
    return JSON.parse(localStorage.getItem('displayUser'));
  }

  getCurrenUserInfo() {
    if (this.userAuth) {
      return this.dataBaseService.getItemsPromise('users/' + this.userAuth.uid + '/info');
    }
    return this.dataBaseService.getItemsPromise('users/');

  }

}
