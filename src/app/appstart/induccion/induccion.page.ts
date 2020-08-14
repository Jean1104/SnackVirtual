import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-induccion',
  templateUrl: './induccion.page.html',
  styleUrls: ['./induccion.page.scss'],
})
export class InduccionPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
