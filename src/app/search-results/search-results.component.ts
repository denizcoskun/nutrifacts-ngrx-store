import { Component, OnInit, Input
 } from '@angular/core';

import { SearchResult } from "../models/search-result";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { StoreService } from ".././services/store.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: BehaviorSubject<SearchResult[]>;
  loading: BehaviorSubject<Boolean>;
  
  constructor( private store: StoreService) {
    this.results = this.store.results;
    this.loading = this.store.loading;
   }

  ngOnInit() {
   
  }

}
