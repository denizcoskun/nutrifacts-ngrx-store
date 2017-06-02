import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module'
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';

import { NutritionService } from './services/nutrition.service';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
                {path: '', pathMatch:'full', redirectTo: 'myfoods' },
                { path: 'search', component: SearchResultsComponent },
                { path: 'food-detail/:id', component: FoodDetailComponent},
                { path: 'myfoods', component: FoodListComponent },
                { path: '**', pathMatch:'full', redirectTo: 'myfoods' }
              ];

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
