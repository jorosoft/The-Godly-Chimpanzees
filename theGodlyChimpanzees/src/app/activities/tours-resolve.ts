import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

@Injectable()
export class ToursResolve {

  constructor(private activitiesService: ActivitiesService)  { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.activitiesService.getItemsObservable('tours/')
                  .map((x) => x)
                        .first();
  }

}
