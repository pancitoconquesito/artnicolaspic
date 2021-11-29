import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarScreenComponent } from './configurar-screen.component';

describe('ConfigurarScreenComponent', () => {
  let component: ConfigurarScreenComponent;
  let fixture: ComponentFixture<ConfigurarScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
