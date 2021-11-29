import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDetalleScreenComponent } from './foto-detalle-screen.component';

describe('FotoDetalleScreenComponent', () => {
  let component: FotoDetalleScreenComponent;
  let fixture: ComponentFixture<FotoDetalleScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoDetalleScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoDetalleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
