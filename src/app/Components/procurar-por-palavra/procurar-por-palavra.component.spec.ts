import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcurarPorPalavraComponent } from './procurar-por-palavra.component';

describe('ProcurarPorPalavraComponent', () => {
  let component: ProcurarPorPalavraComponent;
  let fixture: ComponentFixture<ProcurarPorPalavraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurarPorPalavraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurarPorPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
