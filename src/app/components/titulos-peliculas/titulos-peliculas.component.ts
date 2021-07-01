import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-peliculas',
  templateUrl: './titulos-peliculas.component.html',
  styleUrls: ['./titulos-peliculas.component.scss'],
})
export class TitulosPeliculasComponent implements OnInit {

  @Input() titulo: string = '';

  constructor() { }

  ngOnInit() {}

}
