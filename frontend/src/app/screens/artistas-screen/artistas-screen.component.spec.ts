import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasScreenComponent } from './artistas-screen.component';

describe('ArtistasScreenComponent', () => {
  let component: ArtistasScreenComponent;
  let fixture: ComponentFixture<ArtistasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
