import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitulosPeliculasComponent } from './titulos-peliculas.component';

describe('TitulosPeliculasComponent', () => {
  let component: TitulosPeliculasComponent;
  let fixture: ComponentFixture<TitulosPeliculasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitulosPeliculasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitulosPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
