import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-productodetalle',
  templateUrl: './productodetalle.component.html',
  styleUrls: ['./productodetalle.component.scss'],
})
export class ProductodetalleComponent implements OnInit {

  producto: any;

  constructor(
    public modalController: ModalController,
    private parametros: NavParams
  ) { }

  ngOnInit() {
    this.producto = this.parametros.get('producto');
    console.log(this.producto);
  }

  Dimiss() {
    this.modalController.dismiss();
  }

}
