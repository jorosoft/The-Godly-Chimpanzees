import { SharedModule } from './../../shared/shared.module';
import { UsersService } from './../../core/users.service';
import { ActivitiesService } from './../../core/activities.service';
import { DataBaseService } from '../../core/data-base.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CarouselModule } from 'angular4-carousel';
import { TourInfoComponent } from './../tour-info/tour-info.component';
import { DonateComponent } from './../donate/donate.component';
import { ToursComponent } from './../tours/tours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';

describe('TicketsComponent', () => {
    let component: TicketsComponent;
    let fixture: ComponentFixture<TicketsComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database')
    };

    const ActivatedRouteMocks = {
        snapshot: {
            data: {
                tickets: []
            }
        }
    };



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TicketsComponent,
                ToursComponent,
                DonateComponent,
                TourInfoComponent
            ],
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                CdkTableModule,
                CarouselModule,
                RouterTestingModule,
                SharedModule
            ],
            providers: [
                ActivitiesService,
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
        fixture = TestBed.createComponent(TicketsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
