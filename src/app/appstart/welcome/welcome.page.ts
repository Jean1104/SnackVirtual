import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private platform: Platform,
  ) { }

  ngOnInit() {
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
        console.log(res);
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
