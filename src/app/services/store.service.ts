import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Food } from '.././models/food';
import { SearchResult } from '.././models/search-result';
import { NutritionService } from '.././services/nutrition.service';

@Injectable()
export class StoreService {

  public results =  new BehaviorSubject<SearchResult[]>([]);
  public basket = new BehaviorSubject<Food[]>([]);

  constructor(private nutritionService: NutritionService) { }

  getNutrients(ref: string): Observable<Food> {
   return this.nutritionService.getNutrients(ref);
  }

  addBasket(item: Food) {
    this.basket.next([...this.basket.value, item]);
  }

  removeBasket(food: Food) {
    this.basket.next(this.basket.value.filter(item => {
      return item.id !== food.id;
    }))
  }

}
