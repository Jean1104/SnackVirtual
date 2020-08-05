import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {

  }

  Ingresar() {
    this.auth.login(this.email, this.password).then( res => {
      this.router.navigate(['home'])
    }).catch( error => {
      alert('Error de ingreso')
    })
  }

  LoginGoogle() {
    if(this.platform.is('cordova')) {
      this.auth.login_Google().then( res => {
        this.router.navigate(['home'])
      }).catch( error => {
        alert('Error de registro')
      })
    } else {
      this.auth.login_Google_Web().then( res => {
        this.router.navigate(['home'])
      }).catch( error => {
        alert('Error de registro web')
      })
    }
    
  }

  LoginFacebook() {
    if(this.platform.is('cordova')) {
      this.auth.login_facebook().then( res => {
        this.router.navigate(['home'])
      }).catch( error => {
        alert('Error de registro')
      })
    } else {
      this.auth.login_facebook_Web().then( res => {
        this.router.navigate(['home'])
      }).catch( error => {
        alert('Error de registro web')
      })
    }
    
  }

}
