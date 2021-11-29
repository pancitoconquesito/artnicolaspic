import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirNoticiaScreenComponent } from './subir-noticia-screen.component';

describe('SubirNoticiaScreenComponent', () => {
  let component: SubirNoticiaScreenComponent;
  let fixture: ComponentFixture<SubirNoticiaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirNoticiaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirNoticiaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
