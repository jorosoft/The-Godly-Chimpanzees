import { UsersService } from './../../services/users.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  currentUser;
  animal;
  public condition: boolean;

  constructor(public usersService: UsersService, private animalService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const name = params['name'];
      this.animal = this.animalService.getAnimalByName(name);
      this.currentUser = this.usersService.getCurrenUser();
    });
    if (this.currentUser) {
      this.animalService.checkStatus(this.animal.name, this.currentUser.uid)
      .then((item) => {
        console.log('ngOnInIT');
        console.log(item.val());
        console.log(this.condition);
        this.condition = item.val();
      })
      .catch((err) => alert(err));
    }
  }

  backToList() {
    this.router.navigateByUrl('animals/all');
  }

  favAnimal() {
    this.animalService.addFavAnimal(this.animal.name, this.currentUser.uid)
         .then((item) => this.condition = item.val())
         .catch((err) => alert(err));
  }

}
