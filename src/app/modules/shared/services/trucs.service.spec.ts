import { TestBed, inject } from '@angular/core/testing';

import { TrucsService } from './trucs.service';

describe('TrucsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrucsService]
    });
  });

  it('should be created', inject([TrucsService], (service: TrucsService) => {
    expect(service).toBeTruthy();
  }));
});
