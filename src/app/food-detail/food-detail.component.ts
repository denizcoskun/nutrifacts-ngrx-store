import { Component, OnInit } from '@angular/core';
import { NutritionService } from '../services/nutrition.service';
import { Food } from '../models/food';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food: Food;
  loading = new BehaviorSubject<Boolean>(false);

  constructor(private route: ActivatedRoute, private router: Router,
              private nutritionService: NutritionService, private app: AppComponent) {
  }

  ngOnInit() {
    this.route.params
        .do(() => this.loading.next(true))
        .map(params => params.id)
        .flatMap(id => this.nutritionService.getNutrients(id))
        .subscribe((food: Food) => {
          this.loading.next(false);
          this.food = food;
        });
  }

  addToList(food): void{
    this.app.addBasket(food);
    this.router.navigate(['myfoods']);

  }

}
