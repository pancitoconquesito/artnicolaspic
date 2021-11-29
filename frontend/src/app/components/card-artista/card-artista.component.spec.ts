import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtistaComponent } from './card-artista.component';

describe('CardArtistaComponent', () => {
  let component: CardArtistaComponent;
  let fixture: ComponentFixture<CardArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
