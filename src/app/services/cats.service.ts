import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IBreeds, ICats } from '../models/main';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private errorService: ErrorService, private http: HttpClient) {}
  getBreeds(): Observable<IBreeds[]> {
    return this.http
      .get<IBreeds[]>('https://api.thecatapi.com/v1/breeds', {
        headers: {
          'x-api-key': '3ae2f1a3-a6fa-4ccc-8b98-23c303393b18',
        },
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  getAll(breedId: string, limitNumber: number): Observable<ICats[]> {
    return this.http
      .get<ICats[]>('https://api.thecatapi.com/v1/images/search', {
        params: {
          breed_id: breedId,
          limit: limitNumber,
        },
        headers: { 'x-api-key': '3ae2f1a3-a6fa-4ccc-8b98-23c303393b18' },
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
