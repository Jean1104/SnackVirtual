import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  celular: number;
  email: string;
  password: string; 
  codigo: number;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  Atras() {
    this.router.navigate(['login'])
  }

  Registro() {
    this.auth.registro(this.email, this.password).then( res => {
      this.router.navigate(['login'])
    })
  }

}
