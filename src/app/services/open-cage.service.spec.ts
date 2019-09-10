import { TestBed } from '@angular/core/testing';

import { OpenCageService } from './open-cage.service';

describe('OpenCageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenCageService = TestBed.get(OpenCageService);
    expect(service).toBeTruthy();
  });
});
