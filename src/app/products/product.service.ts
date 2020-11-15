import {Injectable} from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpClientModule,HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap,map, find} from "rxjs/operators";

@Injectable({
    providedIn:'root'
})
export class ProductService {
    private productUrl ='api/products/products.json';
    constructor(private http:HttpClient){

    }
 getProducts():  Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).
     pipe(tap(data => console.log('ALL :'
    +JSON.stringify(data))),catchError(error => { 
        return this.handleError(error);
      })); 
} 
getProduct(id: number): Observable<IProduct | undefined> {
  console.log(id);
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(products => products.productId == id)
        ))
      ;
      
  }
private handleError(err:HttpErrorResponse){
    if (err.status == 500) {      
     
    } else {
      return Observable.throw(err);
    }
};

}