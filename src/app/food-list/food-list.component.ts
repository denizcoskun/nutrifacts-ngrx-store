import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Food } from ".././models/food";;
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: BehaviorSubject<Food[]>;
  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.foodList = this.app.basket;
  }

}
