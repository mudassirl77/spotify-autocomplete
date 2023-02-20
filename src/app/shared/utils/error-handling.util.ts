import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';


export class ErrorHandling {
  public static handleError(error: HttpErrorResponse): Observable<never> {
    // custom error can be added
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong. Please try again later.');
  }
}
