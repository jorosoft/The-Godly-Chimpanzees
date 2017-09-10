import { AngularFireDatabase } from 'angularfire2/database';
import { ActivitiesService } from './../core/activities.service';
import { TestBed, inject } from '@angular/core/testing';
import { FirebaseApp } from 'angularfire2';
import { ToursResolve } from './tours-resolve';

describe('ToursResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToursResolve, ActivitiesService, AngularFireDatabase, FirebaseApp]
    });
  });

  it('should be created', inject([ToursResolve], (service: ToursResolve) => {
    expect(service).toBeTruthy();
  }));
});
