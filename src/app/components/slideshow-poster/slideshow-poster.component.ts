import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() poster: Pelicula[];

  slideOpt = {
    slidesPerView: 3.3,
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
