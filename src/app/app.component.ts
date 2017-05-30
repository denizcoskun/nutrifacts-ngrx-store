import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {FormControl} from '@angular/forms';


import { NutritionService } from './services/nutrition.service';
import { Food } from './models/food';
import { SearchResult } from './models/search-result';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('input') input: ElementRef;

  title = 'app works!';
  results: SearchResult[];
  itemDetail: Food;
  basket = new BehaviorSubject<Food[]>([]);

  constructor(private nutritionService: NutritionService) { }

  ngOnInit(): void {
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .map((query: string) => this.nutritionService.search(query))
      .switch()
      .subscribe((results: SearchResult[]) => {
        this.results = results;
      });
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
