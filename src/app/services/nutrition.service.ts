import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NutritionService {

  constructor(private http: Http) { }

  search(query: string): Observable<any[]> {
    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
    const apiKey = 'KxhNfT3pMwlnn21HUCCs61iG2JwT9EmMrgOnOiU7';
    const params: string = [
      `q=${query}`,
      `sort=r`,
      `max=8`,
      `offset=0`,
      `ds=Standard%20Reference`,
      `api_key=${apiKey}`
    ].join('&');

    const queryUrl = `${url}${params}`;
    console.log(queryUrl);

    return this.http.get(queryUrl).map((response: Response) =>
      response.json().list ? response.json().list.item.map(item => {
        console.log(item);
        return item;
      })
    : null);
  }

  }



