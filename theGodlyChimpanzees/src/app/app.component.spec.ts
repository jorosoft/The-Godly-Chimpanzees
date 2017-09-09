import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from './services/users.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalsService } from './services/animals.service';
import { DataBaseService } from './services/data-base.service';
import { UsersGuardService } from './shared/guards/auth.service';
import { NotAuthGuardService } from './shared/guards/not-auth-guard.service';
import { CustomToastsManager } from './app.toastr.settings';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { firebaseConfig } from '../environments/firebase.config';
import * as firebase from 'firebase/app';

const AngularFireMocks = {
    auth: jasmine.createSpy('auth')
  };

const AngularFireDBMocks = {
    database: jasmine.createSpy('database')
  };

  describe('AppComponent', () => {
  beforeEach(async(() => {
    // firebase.initializeApp(firebaseConfig);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent
      ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        // AngularFireModule.initializeApp(firebaseConfig)
        // RouterModule
      ],
      providers: [
        UsersService,
        DataBaseService,
        ToastOptions,
        [{
            provide: ToastsManager, useClass: CustomToastsManager
          }],
        //   AngularFireAuth,
        //   AngularFireDatabase,
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app);
    expect(app).toBeTruthy();
  }));

//   it(`should have as title 'app'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('TheZoo');
//   }));

//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
//   }));
});
