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
  fromList: Boolean;
  list: BehaviorSubject<Food[]>;
  constructor(private route: ActivatedRoute, private router: Router,
              private nutritionService: NutritionService, private app: AppComponent) {

                this.list = this.app.basket;
  }

  ngOnInit() {
    
    this.route.params
        .do((params) =>  { 
                          params.id ? this.fromList = true: this.fromList= false; 
                          this.loading.next(true)
                        })
        .flatMap(params => params.item ?
        this.nutritionService.getNutrients(params.item): Observable.from(this.list.map((item) => item[params.id])) )
        .subscribe((food: Food) => {
          this.loading.next(false);
          this.food = food;
        });
  }

  addToList(food): void{
    this.app.addBasket(food);
    this.router.navigate(['myfoods']);
  }

  removeFromList(): void {
    this.app.removeBasket(this.food);
    this.router.navigate(['myfoods']);
  }

}
