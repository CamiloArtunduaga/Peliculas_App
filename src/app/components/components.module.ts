import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { TitulosPeliculasComponent } from './titulos-peliculas/titulos-peliculas.component';
import { SlideShowParesComponent } from './slide-show-pares/slide-show-pares.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    TitulosPeliculasComponent,
    SlideShowParesComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    TitulosPeliculasComponent,
    SlideShowParesComponent,
    DetallesComponent
  ]
})
export class ComponentsModule { }
