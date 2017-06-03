import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { Food } from '../../models/food';
import { NutritionService } from '../../services/nutrition.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'food-result',
  templateUrl: './food-result.component.html',
  styleUrls: ['./food-result.component.css']
})
export class FoodResultComponent implements OnInit {

  food: BehaviorSubject<Food>;
  loading = new BehaviorSubject<Boolean>(false);
  constructor(private route: ActivatedRoute, private router: Router,
              private nutritionService: NutritionService, private app: AppComponent,
              private store: StoreService) {

  }

  ngOnInit() {
    this.food = this.store.selectedFood;

    this.route.params
        .map(params => params.id)
        .do((params) => this.store.getNutrients(params))
        .subscribe();
  }

  addToList(): void{
    this.store.addBasket();
    this.router.navigate(['myfoods']);
  }

}
