import { TestBed, inject } from '@angular/core/testing';

import { DelegateService } from './delegate.service';

describe('ServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelegateService]
    });
  });

  it('should be created', inject([DelegateService], (service: DelegateService) => {
    expect(service).toBeTruthy();
  }));
});
