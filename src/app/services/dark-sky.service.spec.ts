import { TestBed } from '@angular/core/testing';

import { DarkSkyService } from './dark-sky.service';

describe('DarkSkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DarkSkyService = TestBed.get(DarkSkyService);
    expect(service).toBeTruthy();
  });
});
