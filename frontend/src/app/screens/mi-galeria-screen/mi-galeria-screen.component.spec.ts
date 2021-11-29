import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiGaleriaScreenComponent } from './mi-galeria-screen.component';

describe('MiGaleriaScreenComponent', () => {
  let component: MiGaleriaScreenComponent;
  let fixture: ComponentFixture<MiGaleriaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiGaleriaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiGaleriaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
