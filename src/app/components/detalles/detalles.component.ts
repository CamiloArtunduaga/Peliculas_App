import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula, PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};

  ocultar = 150;

  actores: Cast[] = [];

  slideOpt = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBeetween: -5
  };

  constructor( private movieService:MoviesService,
               private modalCtrl: ModalController ) { }

  ngOnInit() {
    console.log('ID', this.id);

    this.movieService.getDetalles( this.id ).subscribe(resp => {
      console.log(resp)
      this.pelicula = resp;
    });


    this.movieService.getCreditos( this.id ).subscribe(resp => {
      console.log('Creditos', resp);
      this.actores = resp.cast;
    });

 
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    
  }

  

}
