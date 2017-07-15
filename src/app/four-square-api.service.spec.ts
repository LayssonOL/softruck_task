import { TestBed, inject } from '@angular/core/testing';

import { FourSquareAPIService } from './four-square-api.service';

describe('FourSquareAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FourSquareAPIService]
    });
  });

  it('should be created', inject([FourSquareAPIService], (service: FourSquareAPIService) => {
    expect(service).toBeTruthy();
  }));
});
