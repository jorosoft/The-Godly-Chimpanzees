import { TestBed, inject } from '@angular/core/testing';

import { ToursResolveService } from './tours-resolve.service';

describe('ToursResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToursResolveService]
    });
  });

  it('should be created', inject([ToursResolveService], (service: ToursResolveService) => {
    expect(service).toBeTruthy();
  }));
});
