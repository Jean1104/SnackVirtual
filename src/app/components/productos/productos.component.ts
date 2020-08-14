import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ProductodetalleComponent } from '../productodetalle/productodetalle.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: any;

  constructor(
    public modalController: ModalController,
    private parametros: NavParams
  ) { }

  ngOnInit() {
    this.productos = this.parametros.get('productos');
    console.log(this.productos);
  }

  Dimiss() {
    this.modalController.dismiss();
  }

  async DetalleProducto(producto) {
    const modal = await this.modalController.create({
      component: ProductodetalleComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'producto': producto,
      }
    });
    return await modal.present();
  }

}
