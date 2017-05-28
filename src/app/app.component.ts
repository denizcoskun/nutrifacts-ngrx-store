import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {FormControl} from '@angular/forms';

import { NutritionService } from "./services/nutrition.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') input: ElementRef;

  title = 'app works!';
  results: any[];

  constructor(private nutritionService: NutritionService) { }

  ngOnInit(): void {

      
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .map((query: string) => this.nutritionService.search(query))
      .switch()
      .subscribe((results: any) => {
        this.results = results;
      },
      (error: any) => {
        console.log(error)
      }
      , ()  => {
        console.log('done')
      }
      )
  }


}
