import { CommentsService } from './../../core/comments.service';
import { LoaderService } from './../../core/loader.service';
import { UsersService } from './../../core/users.service';
import { AnimalsService } from './../../core/animals.service';
import { DataBaseService } from '../../core/data-base.service';

import { SharedModule } from './../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimalDetailsComponent } from './animal-details.component';
import { MaterialModule } from '@angular/material';
import { FirebaseApp } from 'angularfire2';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AngularFireDatabase } from 'angularfire2/database';

describe('AnimalDetailsComponent', () => {
    let component: AnimalDetailsComponent;
    let fixture: ComponentFixture<AnimalDetailsComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database'),
        list: jasmine.createSpy('list')
    };

    const AnimalServiceMocks = {
        getAnimalByName: jasmine.createSpy('getAnimalByName')
    };

    AngularFireDBMocks.list.and.returnValue({ subscribe: () => { } });
    AnimalServiceMocks.getAnimalByName.and.returnValue({ name: 'AnyName' });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AnimalDetailsComponent
            ],
            imports: [
                MaterialModule,
                RouterTestingModule,
                SharedModule
            ],
            providers: [
                UsersService,
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
                },
                LoaderService,
                CommentsService,
                {
                    provide: AnimalsService,
                    useValue: AnimalServiceMocks
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
