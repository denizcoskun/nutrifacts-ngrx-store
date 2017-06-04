import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as FoodActions from "./actions";
import { NutritionService } from ".././services/nutrition.service";


@Injectable()

export class FoodEffects {

@Effect() 
searchFood$: Observable<Action> = this.actions$
.ofType(FoodActions.SEARCH)
.map(toPayload)
.switchMap(query => {
    return this.nutritionService.searchFood(query)
    .map(results => new FoodActions.SearchDone(results));
    // catch(() => of(new FoodActions.FetchFoodFail()))
});

@Effect() 
fetchFood$: Observable<Action> = this.actions$
.ofType(FoodActions.FETCH_FOOD)
.map(toPayload)
.switchMap(query => {
    return this.nutritionService.fetchFood(query)
    .map(food => new FoodActions.FetchFoodDone(food));
    // catch(() => of(new FoodActions.FetchFoodFail()))
});

constructor(private actions$: Actions, private nutritionService: NutritionService) {}


}