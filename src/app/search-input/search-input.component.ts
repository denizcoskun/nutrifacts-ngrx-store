import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '.././store/reducer';
import * as Actions from '.././store/actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
@ViewChild('input') input: ElementRef;

    constructor(private store: Store<fromRoot.State>) { }

    ngOnInit() { 
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do((query: string) => this.store.dispatch(new Actions.Search(query)))
      .switch()
      .subscribe();

    }

}
