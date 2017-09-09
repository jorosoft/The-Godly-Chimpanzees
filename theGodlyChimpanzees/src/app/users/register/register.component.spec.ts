import { UsersService } from './../../services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MaterialModule } from '@angular/material';
import { DataBaseService } from '../../services/data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
  };

  const AngularFireDBMocks = {
    database: jasmine.createSpy('database')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterTestingModule,
      ],
      providers: [
        ToastsManager,
        ToastOptions,
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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
