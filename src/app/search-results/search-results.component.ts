import { Component, OnInit, Input } from '@angular/core';

import { SearchResult } from '../models/search-result';
import { Observable } from 'rxjs/Observable';

import { StoreService } from '.././services/store.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '.././store/reducer';
import * as Actions from '.././store/actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: Observable<SearchResult[]>;
  loading: Observable<Boolean>;

  constructor( private store: Store<fromRoot.State>) {
    this.results = this.store.select(state => state.results);
    this.loading = this.store.select(state => state.loading);
   }

  ngOnInit() {

  }

}
