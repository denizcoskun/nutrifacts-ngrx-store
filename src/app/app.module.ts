import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NutritionService } from './services/nutrition.service';
import { StoreService } from './services/store.service';

import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FoodResultComponent } from './search-results/food-result/food-result.component';

import { reducer } from './store/reducer';
import { FoodEffects } from './store/effects';
import { SearchInputComponent } from './search-input/search-input.component';

const routes: Routes = [
                {path: '', pathMatch:'full', redirectTo: 'myfoods' },
                { path: 'search', component: SearchResultsComponent },
                { path: 'search/:id', component: FoodResultComponent},
                { path: 'myfoods', component: FoodListComponent },
                { path: 'myfoods/:id', component: FoodDetailComponent},
                { path: '**', pathMatch: 'full', redirectTo: 'myfoods' }
              ];

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent,
    SearchResultsComponent,
    FoodResultComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    EffectsModule.run(FoodEffects)
  ],
  providers: [NutritionService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
