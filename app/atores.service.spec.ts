import { TestBed } from '@angular/core/testing';

import { AtoresService } from './atores.service';

describe('AtoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtoresService = TestBed.get(AtoresService);
    expect(service).toBeTruthy();
  });
});
