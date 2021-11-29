import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardImagenGaleriaComponent } from './card-imagen-galeria.component';

describe('CardImagenGaleriaComponent', () => {
  let component: CardImagenGaleriaComponent;
  let fixture: ComponentFixture<CardImagenGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardImagenGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardImagenGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
