import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[];

  // Queda claro que la persona puede hacer slide(corre a la izquierda)
  slideOpt = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor( private modalCtrl:ModalController ) { }

  ngOnInit() {}

  async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.present();

  }
}
