import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Food } from '../../models/food';
import { StoreService } from '../../services/store.service';

import { Store } from "@ngrx/store";
import * as fromRoot from "../.././store/reducer";
import * as Actions from "../.././store/actions";

@Component({
  selector: 'food-result',
  templateUrl: './food-result.component.html',
  styleUrls: ['./food-result.component.css']
})
export class FoodResultComponent implements OnInit {

  food: Observable<Food>;
  loading: Observable<Boolean>;
  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.food = this.store.select(state => state.selectedFood);
    this.loading = this.store.select(state => state.loading);
    this.route.params
        .map(params => params.id)
        .do((id) => this.store.dispatch(new Actions.FetchFood(id)))
        .subscribe();
  }

  addToList(): void{
    this.store.dispatch(new Actions.AddFood());
    this.router.navigate(['myfoods']);
  }

}
