import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animal;
  condition = false;

  constructor(private animalService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const name = params['name'];
      this.animal = this.animalService.getAnimalByName(name);
    });
  }

  backToList() {
    this.router.navigateByUrl('animals/all');
  }
}
