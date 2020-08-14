import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductosComponent
  ],
  exports: [
    HeaderComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
