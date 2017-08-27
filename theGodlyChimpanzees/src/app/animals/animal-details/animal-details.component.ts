import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../../models.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal;

  constructor(private modelService: ModelsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const name = params['name'];
      this.animal = this.modelService.getAnimalByName(name);
    });
  }

  backToList() {
    this.router.navigateByUrl('animals/all');
  }
}
