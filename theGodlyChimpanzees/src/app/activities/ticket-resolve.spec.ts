import { AngularFireDatabase } from 'angularfire2/database';
import { ActivitiesService } from './../core/activities.service';
import { TestBed, inject } from '@angular/core/testing';
import { FirebaseApp } from 'angularfire2';
import { TicketResolve } from './ticket-resolve';
import { DataBaseService } from './../core/data-base.service';
import { AngularFireAuth } from 'angularfire2/auth';



describe('TicketResolve', () => {

  const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
};

const AngularFireDBMocks = {
    database: jasmine.createSpy('database'),
    list: jasmine.createSpy('list')
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketResolve, ActivitiesService,
                  AngularFireDatabase, FirebaseApp,
                  DataBaseService,
        {
          provide: AngularFireDatabase,
          useValue: AngularFireDBMocks
        },
        {
          provide: AngularFireAuth,
          useValue: AngularFireMocks
        }]
    });
  });

  it('should be created', inject([TicketResolve], (service: TicketResolve) => {
    expect(service).toBeTruthy();
  }));
});
