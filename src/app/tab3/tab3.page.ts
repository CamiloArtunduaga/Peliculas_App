import { Component, Output, OnInit } from '@angular/core';
import { Genre, Pelicula, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  generos: Genre[] = [];

  peliculas: PeliculaDetalle[] = []

  favoritoGenero: any[] = [];

  constructor( private dataLocalService: DataLocalService,
               private moviesServices:MoviesService ) {}


  async ngOnInit() {}

  // ciclo de vida de los componentes de ionic
  //se dispara cada vez que la pagina vaya a entrar
  async ionViewWillEnter() {
    
    this.generos = await this.moviesServices.cargarGeneros();

    this.peliculas = await this.dataLocalService.cargarFavoritos();

    this.peliPorGenero( this.generos, this.peliculas );
  }

  peliPorGenero( generos: Genre[], peliculas:PeliculaDetalle[]  ) {
    this.favoritoGenero = [];

    generos.forEach( genero => {

      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        } )
      });

    });

    console.log(this.favoritoGenero)

  }
}
