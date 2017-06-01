import { Component, OnInit, Input
 } from '@angular/core';

import { AppComponent } from "../app.component";
import { SearchResult } from "../models/search-result";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: BehaviorSubject<SearchResult[]>;
  constructor(private app: AppComponent) {
    this.results = this.app.results;
   }

  ngOnInit() {
   
  }

}
