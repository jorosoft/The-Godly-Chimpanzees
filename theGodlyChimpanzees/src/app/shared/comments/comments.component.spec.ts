import { UsersService } from './../../core/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentsService } from './../../core/comments.service';
import { DataBaseService } from '../../core/data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

describe('CommentsComponent', () => {
    let component: CommentsComponent;
    let fixture: ComponentFixture<CommentsComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database'),
        list: jasmine.createSpy('list')
    };

    AngularFireDBMocks.list.and.returnValue({ subscribe: () => { } });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentsComponent],
            imports: [
                MaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [
                CommentsService,
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
        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
