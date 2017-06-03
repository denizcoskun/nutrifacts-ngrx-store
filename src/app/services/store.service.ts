import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Food } from '.././models/food';
import { SearchResult } from '.././models/search-result';
import { NutritionService } from '.././services/nutrition.service';

@Injectable()
export class StoreService {

  public results =  new BehaviorSubject<SearchResult[]>([]);
  public basket = new BehaviorSubject<Food[]>([]);
  public loading = new BehaviorSubject<Boolean>(false);
  public selectedFood = new BehaviorSubject<Food>(new Food({ndbno: '', name: '', nutrients: ''}));

  constructor(private nutritionService: NutritionService) { 
  }

  search(query) {
    this.loading.next(true);
    this.nutritionService.search(query)
    .subscribe((results) => {
      this.results.next(results);
      this.loading.next(false);
    }, (error) => {
      console.log(error);
      this.loading.next(false);
    })
  }

  getNutrients(id) {
    this.nutritionService.getNutrients(id)
    .subscribe((food: Food) => this.selectedFood.next(food));
  }

  getFoodDetail(id) {
      this.selectedFood.next(this.basket.value[id]);
  }

  addBasket() {
    this.basket.next([...this.basket.value, this.selectedFood.value]);
  }

  removeBasket(food: Food) {
    this.basket.next(this.basket.value.filter(item => {
      return item.id !== food.id;
    }));
  }

}
