import { CommentsService } from './../../services/comments.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { DataBaseService } from '../../services/data-base.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

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
