import { TestBed, inject } from '@angular/core/testing';

import { AzeService } from './aze.service';

describe('AzeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzeService]
    });
  });

  it('should be created', inject([AzeService], (service: AzeService) => {
    expect(service).toBeTruthy();
  }));
});
