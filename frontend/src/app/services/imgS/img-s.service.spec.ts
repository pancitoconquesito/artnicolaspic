import { TestBed } from '@angular/core/testing';

import { ImgSService } from './img-s.service';

describe('ImgSService', () => {
  let service: ImgSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
