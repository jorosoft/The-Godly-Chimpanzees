import { SharedModule } from './../../shared/shared.module';
import { UsersService } from './../../core/users.service';
import { DataBaseService } from './../../core/data-base.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivitiesService } from './../../core/activities.service';
import { CarouselModule } from 'angular4-carousel';
import { TourInfoComponent } from './../tour-info/tour-info.component';
import { ToursComponent } from './../tours/tours.component';
import { TicketsComponent } from './../tickets/tickets.component';
import { ActivitiesRoutingModule } from './../activities-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateComponent } from './donate.component';
import { MaterialModule, MdPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk';
import { RouterTestingModule } from '@angular/router/testing';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DonateComponent', () => {
    let component: DonateComponent;
    let fixture: ComponentFixture<DonateComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database')
    };

    const UserMocks = {
        getCurrenUser: jasmine.createSpy('getCurrenUser')
    };

    UserMocks.getCurrenUser.and.returnValue({ uid: 1234 });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DonateComponent,
                TicketsComponent,
                ToursComponent,
                TourInfoComponent
            ],
            imports: [
                MaterialModule,
                FormsModule,
                ReactiveFormsModule,
                CdkTableModule,
                ActivitiesRoutingModule,
                MdPaginatorModule,
                CarouselModule,
                ActivitiesRoutingModule,
                RouterTestingModule,
                SharedModule,
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
                    provide: UsersService,
                    useValue: UserMocks
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DonateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
