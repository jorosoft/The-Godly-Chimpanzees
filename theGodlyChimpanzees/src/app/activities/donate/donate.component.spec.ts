// import { UsersService } from './../../services/users.service';
// import { DataBaseService } from './../../services/data-base.service';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { ActivitiesService } from './../../services/activities.service';
// import { CarouselModule } from 'angular4-carousel';
// import { TourInfoComponent } from './../tour-info/tour-info.component';
// import { ToursComponent } from './../tours/tours.component';
// import { TicketsComponent } from './../tickets/tickets.component';
// import { ActivitiesRoutingModule } from './../activities-routing.module';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { DonateComponent } from './donate.component';
// import { MaterialModule, MdPaginatorModule } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CdkTableModule } from '@angular/cdk';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FirebaseApp } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

// describe('DonateComponent', () => {
//   let component: DonateComponent;
//   let fixture: ComponentFixture<DonateComponent>;

//   const AngularFireMocks = {
//     auth: jasmine.createSpy('auth')
//   };

//   const AngularFireDBMocks = {
//     database: jasmine.createSpy('database')
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         DonateComponent,
//         TicketsComponent,
//         ToursComponent,
//         TourInfoComponent
//       ],
//       imports: [
//         MaterialModule,
//         FormsModule,
//         ReactiveFormsModule,
//         CdkTableModule,
//         ActivitiesRoutingModule,
//         MdPaginatorModule,
//         CarouselModule,
//         ActivitiesRoutingModule,
//         RouterTestingModule
//       ],
//       providers: [
//         ActivitiesService,
//         UsersService,
//         ToastsManager,
//         ToastOptions,
//         DataBaseService,
//         FirebaseApp,
//         {
//             provide: AngularFireDatabase,
//             useValue: AngularFireDBMocks
//         },
//         {
//           provide: AngularFireAuth,
//           useValue: AngularFireMocks
//         }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DonateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
