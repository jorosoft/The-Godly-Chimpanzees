import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { DataBaseService } from './data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

describe('UsersService', () => {

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
          UsersService,
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
          ToastsManager,
          ToastOptions
        ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
