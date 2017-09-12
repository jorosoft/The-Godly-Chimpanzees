// import { CommentsService } from './../../core/comments.service';
// import { LoaderService } from './../../core/loader.service';
// import { SharedModule } from './../../shared/shared.module';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRouteSnapshot } from '@angular/router';
// import { ActivitiesService } from './../../core/activities.service';
// import { CarouselModule } from 'angular4-carousel';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { TourInfoComponent } from './tour-info.component';
// import { MaterialModule } from '@angular/material';
// import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
// import { DataBaseService } from '../../core/data-base.service';
// import { FirebaseApp } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';

// describe('TourInfoComponent', () => {
//   let component: TourInfoComponent;
//   let fixture: ComponentFixture<TourInfoComponent>;

//   const AngularFireMocks = {
//     auth: jasmine.createSpy('auth')
//   };

//   const AngularFireDBMocks = {
//     database: jasmine.createSpy('database')
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ TourInfoComponent ],
//       imports: [
//         MaterialModule,
//         CarouselModule,
//         RouterTestingModule,
//         SharedModule
//       ],
//       providers: [
//           ActivitiesService,
//           ToastsManager,
//           ToastOptions,
//           DataBaseService,
//           FirebaseApp,
//           {
//             provide: AngularFireDatabase,
//             useValue: AngularFireDBMocks
//           },
//           {
//             provide: AngularFireAuth,
//             useValue: AngularFireMocks
//           },
//           LoaderService,
//           CommentsService
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TourInfoComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
