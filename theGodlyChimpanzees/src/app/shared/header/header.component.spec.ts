import { firebaseConfig } from './../../../environments/firebase.config';
import { ToastsManager, ToastOptions } from 'ng2-toastr';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataBaseService } from './../../core/data-base.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsersService } from './../../core/users.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database')
    };

    firebase.initializeApp(firebaseConfig);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                MaterialModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(firebaseConfig)
            ],
            providers: [
                UsersService,
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
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
