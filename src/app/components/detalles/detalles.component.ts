import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula, PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { MoviesService } from '../../services/movies.service';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id;

  pelicula: PeliculaDetalle = {};

  ocultar = 150;

  corazon= 'heart-outline';

  actores: Cast[] = [];

  slideOpt = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBeetween: -5
  };

  constructor( private movieService:MoviesService,
               private modalCtrl: ModalController,
               private dataLocal_:DataLocalService ) { }

  ngOnInit() {

    this.dataLocal_.existePelicula(this.id)
      .then( existe => this.corazon =(existe)? 'heart': 'heart-outline' )


    console.log('ID', this.id);

    this.movieService.getDetalles( this.id ).subscribe(resp => {
      this.pelicula = resp;
    });


    this.movieService.getCreditos( this.id ).subscribe(resp => {
      this.actores = resp.cast;
    });

 
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  async favorito() {
     const existe = await  this.dataLocal_.guardarPelicula(this.pelicula);
     this.corazon = (existe)? 'heart': 'heart-outline' ;
  }

}

  

