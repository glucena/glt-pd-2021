import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
  public token: string;

  constructor(
    private httpClient: HttpClient,
  ) {}

  //#region PUBLIC METHODS
  /**
   * HTTP Basic authorization
   *
   * @param credentials the user credentials
   */
  login(credentials: {username: string, password: string}): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    });

    return this.httpClient.post(environment.backend.baseUrl + '/login', {}, { headers })
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  //#endregion

  //#region PRIVATE METHODS
  private errorHandler(error) {
    const errorMessage = error.error instanceof ErrorEvent
      ? error.error.message
      : `Error code: ${error.status}\nMessage: ${error.message}`;

    return throwError(errorMessage);
  }
  //#endregion

}
