import { LoaderService } from './../../core/loader.service';
import { ActivitiesService } from './../../core/activities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/find';
import { Observable } from 'rxjs/Observable';
import { Tour } from '../../models/tour.model';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';


@Component({
    selector: 'app-tour-info',
    templateUrl: './tour-info.component.html',
    styleUrls: ['./tour-info.component.scss']
})
export class TourInfoComponent implements OnInit {
    public tours: any[];
    public tour;
    public imageSources: string[];
    public config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };

    constructor(private activitiesService: ActivitiesService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private loaderService: LoaderService) { }

    ngOnInit() {
        // show loader
        this.tours = this.activatedRoute.snapshot.data['tours'];
        this.loaderService.display(true);
        this.activatedRoute.params.subscribe(params => {
            const name = params['name'];
            this.tours.forEach((value: Tour) => {
                if (value.name === name) {
                    this.tour = value;
                    this.imageSources = [
                        'assets/img/tours/' + this.tour.name + '/' + this.tour.name + '_0.jpg',
                        'assets/img/tours/' + this.tour.name + '/' + this.tour.name + '_1.jpg',
                        'assets/img/tours/' + this.tour.name + '/' + this.tour.name + '_2.jpg',
                    ];
                }
                // hide loader
                this.loaderService.display(false);
            });
        });
    }
    backToList() {
        this.router.navigateByUrl('activities/tours');
    }
    buyATicket() {
        this.activitiesService.setSelectedValue(this.tour.value);
        this.router.navigateByUrl('activities/tickets');
    }
}
