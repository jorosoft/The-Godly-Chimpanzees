import { AnimalsService } from './../../services/animals.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from './../../services/users.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimalDetailsComponent } from './animal-details.component';
import { MaterialModule } from '@angular/material';
import { MyFavToggleDirective } from '../../shared/directives/my-fav-toggle.directive';
import { FirebaseApp } from 'angularfire2';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { DataBaseService } from '../../services/data-base.service';
import { AngularFireDatabase } from 'angularfire2/database';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
  };

  const AngularFireDBMocks = {
    database: jasmine.createSpy('database')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnimalDetailsComponent,
        MyFavToggleDirective
    ],
      imports: [
        MaterialModule
      ],
      providers: [
        UsersService,
        AnimalsService,
        FirebaseApp,
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
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
