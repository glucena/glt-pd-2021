import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../models/user.model';

import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  //#region PUBLIC METHODS
  /**
   * User registration
   *
   * @param user the user data
   */
  create(user: User): Observable<any> {
    return this.httpClient.post(environment.backend.baseUrl + '/register', user)
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
