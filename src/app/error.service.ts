import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  public handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error(error.status);
    } else {
      console.error(error.status);
    }
    return throwError('something bad happened');
  };
}
