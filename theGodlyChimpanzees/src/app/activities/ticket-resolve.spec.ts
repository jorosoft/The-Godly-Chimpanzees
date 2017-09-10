import { TestBed, inject } from '@angular/core/testing';

import { TicketResolveService } from './ticket-resolve.service';

describe('TicketResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketResolveService]
    });
  });

  it('should be created', inject([TicketResolveService], (service: TicketResolveService) => {
    expect(service).toBeTruthy();
  }));
});
