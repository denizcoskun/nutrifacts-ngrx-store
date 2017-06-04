import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Food } from ".././models/food";;
import { Router } from "@angular/router";
import { StoreService } from ".././services/store.service";

import { Store } from "@ngrx/store";
import * as Actions from ".././store/actions";
import * as fromRoot from ".././store/reducer";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Observable<Food[]>;
  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
    this.foodList = this.store.select(state => state.basket);;
  }

  removeFood(food: Food) {
     this.store.dispatch(new Actions.RemoveFood(food));
  }

}
