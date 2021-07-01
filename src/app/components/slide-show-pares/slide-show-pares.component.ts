import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {
  @Input() poster: Pelicula[];
  @Output() cargarMas = new EventEmitter();

  slideOpt = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBeetween: -10
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  cargarImg() {

    this.cargarMas.emit();
      console.log('cargar mas')
  }

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
