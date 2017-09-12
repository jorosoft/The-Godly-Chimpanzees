import { ActivitiesService } from './../../core/activities.service';
import { DataBaseService } from '../../core/data-base.service';
import { CdkTableModule } from '@angular/cdk';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursComponent } from './tours.component';
import { MaterialModule } from '@angular/material';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('ToursComponent', () => {
    let component: ToursComponent;
    let fixture: ComponentFixture<ToursComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database')
    };
    const ActivatedRouteMocks = {
        snapshot: {
            data: {
                tours: []
            }
        }
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ToursComponent],
            imports: [
                MaterialModule,
                CdkTableModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            providers: [
                ActivitiesService,
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
                    provide: ActivatedRoute,
                    useValue: ActivatedRouteMocks
                  }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToursComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
