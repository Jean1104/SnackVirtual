import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductosComponent } from '../../components/productos/productos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.auth.get_user_auth().subscribe( user => {
      console.log(user);
    })

    this.auth.get_categorias().subscribe( res => {
      this.categorias = res;
      console.log(this.categorias);
    })
  }

  async VerProductos(lista) {
    const modal = await this.modalController.create({
      component: ProductosComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'productos': lista.productos,
      }
    });
    return await modal.present();
  }
}
