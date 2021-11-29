import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetalleScreensComponent } from './noticia-detalle-screens.component';

describe('NoticiaDetalleScreensComponent', () => {
  let component: NoticiaDetalleScreensComponent;
  let fixture: ComponentFixture<NoticiaDetalleScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaDetalleScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaDetalleScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
