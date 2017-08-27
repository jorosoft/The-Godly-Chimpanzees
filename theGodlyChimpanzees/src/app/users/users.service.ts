import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UsersService {

  constructor(public afAuth: AngularFireAuth) {
  }


  register(User) {
     return this.afAuth.auth.createUserWithEmailAndPassword(User.email, User.password)
          .then((user) => {
              console.log(user);
              return user;
          });
  }

}
