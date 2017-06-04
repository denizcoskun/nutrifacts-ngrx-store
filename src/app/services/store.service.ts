import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Food } from '.././models/food';
import { SearchResult } from '.././models/search-result';
import { NutritionService } from '.././services/nutrition.service';
import { Store } from "@ngrx/store";
import * as fromRoot from ".././store/reducer";
import * as Actions from '.././store/actions';

@Injectable()
export class StoreService {

  state: Observable<fromRoot.State>;
  constructor(private nutritionService: NutritionService, private store: Store<fromRoot.State>) { 
  this.state = this.store;
  }


  searchFood(query) {
    this.store.dispatch(new Actions.Search(query));
  }

  fetchFood(id) {
    this.store.dispatch(new Actions.FetchFood(id));
  }

  getFood(id) {
    this.store.dispatch(new Actions.GetFood(id));
  }

  addBasket() {
    this.store.dispatch(new Actions.AddFood());
  }

  removeBasket(food: Food) {
    this.store.dispatch(new Actions.RemoveFood(food));
  }

}
