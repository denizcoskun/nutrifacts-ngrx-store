import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Food } from ".././models/food";;
import { Router } from "@angular/router";
import { StoreService } from ".././services/store.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: BehaviorSubject<Food[]>;
  constructor(private store: StoreService, private router: Router) { }

  ngOnInit() {
    this.foodList = this.store.basket;
  }

  removeFood(food: Food) {
    this.store.removeBasket(food);
  }

}
