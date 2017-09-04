import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './../../services/activities.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  public tours = [];
  constructor(public activitiService: ActivitiesService, public router: Router) { }

  ngOnInit() {
    this.activitiService.getTours().subscribe(value => this.tours.push(value));
  }

}
