import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {FormControl} from '@angular/forms';

import { NutritionService } from './services/nutrition.service';
import { StoreService } from './services/store.service';

import { Food } from './models/food';
import { SearchResult } from './models/search-result';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('input') input: ElementRef;

  title = 'app works!';
  results: BehaviorSubject<SearchResult[]>;
  itemDetail: Food;
  loading: BehaviorSubject<Boolean>;
  public basket = new BehaviorSubject<Food[]>([]);
  constructor(private nutritionService: NutritionService, private store: StoreService) {
   }

  ngOnInit(): void {
    this.results = this.store.results;
    this.loading = this.store.loading;

    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do((query: string) => this.store.search(query))
      .switch()
      .subscribe();
  }

  getNutrients(ref: string): void {
   this.nutritionService.getNutrients(ref)
   .subscribe((item: Food) => {
     this.itemDetail = item});
  }

  addBasket(item: Food) {
    this.itemDetail = null;
    this.basket.next([...this.basket.value, item]);
  }

  removeBasket(food: Food) {
    this.basket.next(this.basket.value.filter(item => {
      return item.id !== food.id;
    }))
  }

}
