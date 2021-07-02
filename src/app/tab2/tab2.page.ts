import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from '../components/detalles/detalles.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = [ 'viuda negra', 'Luca', 'bubalu' ];


  constructor( private moviesServices:MoviesService,
               private modalCtrl:ModalController ) {}

  ngOnInit() {
    
  }

  buscar( event ) {
    const valor = event.detail.value;

    if( valor.length === 0 ){
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando =true;
    this.moviesServices.getBusqueda( valor ).subscribe( resp => {
      console.log( resp );
      this.peliculas = resp['results'];
      this.buscando =false;
    } )

   
    console.log(valor);

  }

  async mostrarDetalle( id: string ) {
    const valor = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });

    valor.present();
  }


}
