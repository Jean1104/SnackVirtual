import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

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
}
