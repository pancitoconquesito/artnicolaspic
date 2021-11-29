import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirImgScreensComponent } from './subir-img-screens.component';

describe('SubirImgScreensComponent', () => {
  let component: SubirImgScreensComponent;
  let fixture: ComponentFixture<SubirImgScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirImgScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirImgScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
