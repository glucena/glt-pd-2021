import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url = 'https://swapi.dev/api/starships/';

  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  };

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor( private http: HttpClient ) {}

  getShips(): Observable<any>{
    return this.http.get(this.url)
      .pipe(
        take(1),
      );
  }
}
