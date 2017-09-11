import { AngularFireDatabase } from 'angularfire2/database';
import { LoaderService } from './../../core/loader.service';
import { DataBaseService } from './../../core/data-base.service';
import { AnimalsService } from './../../core/animals.service';
import { CdkTableModule } from '@angular/cdk';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimalsListComponent } from './animals-list.component';
import { MaterialModule } from '@angular/material';
import { FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute } from '@angular/router';

describe('AnimalsListComponent', () => {
    let component: AnimalsListComponent;
    let fixture: ComponentFixture<AnimalsListComponent>;

    const AngularFireMocks = {
        auth: jasmine.createSpy('auth')
    };

    const AngularFireDBMocks = {
        database: jasmine.createSpy('database')
    };

    const ActivatedRouteMocks = {
        snapshot: {
            data: {
                animals: []
            }
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AnimalsListComponent],
            imports: [
                MaterialModule,
                CdkTableModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            providers: [
                AnimalsService,
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
                ToastsManager,
                ToastOptions,
                {
                    provide: ActivatedRoute,
                    useValue: ActivatedRouteMocks
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnimalsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
