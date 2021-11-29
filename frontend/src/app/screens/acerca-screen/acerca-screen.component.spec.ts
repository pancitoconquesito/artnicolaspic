import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaScreenComponent } from './acerca-screen.component';

describe('AcercaScreenComponent', () => {
  let component: AcercaScreenComponent;
  let fixture: ComponentFixture<AcercaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
