import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { StoreService } from '.././services/store.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food: BehaviorSubject<Food>;
  loading = new BehaviorSubject<Boolean>(false);

  constructor(private route: ActivatedRoute, private router: Router,
              private nutritionService: NutritionService, private store: StoreService) {

  }

  ngOnInit() {
    this.food = this.store.selectedFood;
    this.route.params
        .map(params => params.id)
        .do(params => this.store.getFoodDetail(params))
        .subscribe();
  }

  removeFromList(food: Food): void {
    this.store.removeBasket(food);
    this.router.navigate(['myfoods']);
  }

}
