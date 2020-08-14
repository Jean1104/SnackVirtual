import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalregistro',
  templateUrl: './modalregistro.component.html',
  styleUrls: ['./modalregistro.component.scss'],
})
export class ModalregistroComponent implements OnInit {

  nombre: string = "";
  apellido: string = "";
  celular: number;
  email: string;
  password: string; 
  codigo: number;

  constructor(
    private auth: AuthService,
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  Atras() {
    this.modalController.dismiss();
  }

  Registro() {
    this.auth.registro(this.email, this.password).then( res => {
      this.router.navigate(['login'])
    })
  }

}
