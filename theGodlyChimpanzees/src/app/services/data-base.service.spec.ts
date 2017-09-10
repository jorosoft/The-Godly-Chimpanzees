import { TestBed, inject } from '@angular/core/testing';

import { DataBaseService } from './data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

describe('DataBaseService', () => {

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database'),
        list: jasmine.createSpy('list')
      };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          DataBaseService,
          FirebaseApp,
          {
            provide: AngularFireDatabase,
            useValue: AngularFireDBMocks
          },
          {
            provide: AngularFireAuth,
            useValue: AngularFireMocks
          },
        ]
    });
  });

  it('should be created', inject([DataBaseService], (service: DataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
