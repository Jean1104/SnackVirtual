import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth: AngularFireAuth,
    private facebook: Facebook,
    private googleplus: GooglePlus,
    private router: Router,
    private db: AngularFirestore
  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(res=>{
        resolve(res)
      }).catch(error => {
        rejected(error)
      })
    })
  }

  logout() {
    this.AFauth.signOut().then( () => {
      this.googleplus.disconnect();
      this.router.navigate(['login']);
    })
  }

  registro(email: string, password: string) {
    return new Promise((resolve, rejected) =>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res=>{
        resolve(res)
      }).catch(error => {
        rejected(error);
      });
    })
  }

  login_Google() {
    return this.googleplus.login({}).then( res => {
      const res_data = res;
      return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null, res_data.accessToken))
    })
  }

  login_Google_Web() {
    return this.AFauth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  login_facebook() {
    return this.facebook.login(['email', 'public_profile']).then( (res: FacebookLoginResponse) => { 
      const credential_fb = auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      return this.AFauth.signInWithCredential(credential_fb);
    })
  }

  login_facebook_Web() {
    return this.AFauth.signInWithPopup(new auth.FacebookAuthProvider())
  }

  get_user_auth() {
    return this.AFauth.authState
  }

  get_categorias() {
    return this.db.collection('categorias').valueChanges();
  }

}
