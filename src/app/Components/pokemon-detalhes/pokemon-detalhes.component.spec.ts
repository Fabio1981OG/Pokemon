import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailComponent } from './pokemon-detalhes.component';

describe('PokemonDetalhesComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
