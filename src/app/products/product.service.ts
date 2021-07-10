import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json'

    constructor(private http: HttpClient) {
    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).
        pipe(tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError))
    }

    handleError(err: HttpErrorResponse) {
        const errorMessager = err.error instanceof ErrorEvent ?
        `An error occured: ${err.error.message}` :
        `Server returned code: ${err.status}, error message is: ${err.message}`;
        return throwError(errorMessager);
    }
}