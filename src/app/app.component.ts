import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { NutritionService } from './services/nutrition.service';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {


  constructor(private nutritionService: NutritionService, private store: StoreService) {
   }

  ngOnInit(): void {


  }



}
