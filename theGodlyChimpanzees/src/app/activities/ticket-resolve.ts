import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketResolve implements Resolve<any> {

  constructor(private activitiesService: ActivitiesService)  { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.activitiesService.getItemsObservable('tickets/')
                  .map((x) => x)
                        .first();
  }

}
