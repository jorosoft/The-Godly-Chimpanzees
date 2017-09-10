import { DatePickerModule } from 'ng2-datepicker';
import { SharedModule } from './../../shared/shared.module';
import { UsersService } from './../../services/users.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MaterialModule } from '@angular/material';
import { DataBaseService } from '../../services/data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastOptions, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
  };

  const AngularFireDBMocks = {
    database: jasmine.createSpy('database'),
    list: jasmine.createSpy('list')
  };

  const UserServiceMocks = {
    getCurrenUser: jasmine.createSpy('getCurrenUser')
  };

  UserServiceMocks.getCurrenUser.and.returnValue({ uid: 1234 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        SharedModule,
        DatePickerModule
      ],
      providers: [
          ToastsManager,
          ToastOptions,
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
          {
              provide: UsersService,
              useValue: UserServiceMocks
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
