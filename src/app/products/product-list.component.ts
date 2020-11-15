import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
   
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
  
    pageTitle : string = 'Products List';
    imageWidth:number =50;
    imageMargin: number = 2;
    showImage:boolean =false;
    errorMessage:string;
    
    _listFilter = '';
    constructor(private productService:ProductService){
       
        this.filterProducts = this.products;
        this.listFilter = 'cart';
    }

    onRatinClicked(message: string){
        this.pageTitle= 'Products List : ' +  message;
    };


    get listfilter():string {
    return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
      }

      filterProducts : IProduct[]= [];
      products: IProduct[] =[];

    performFilter(filterBy: string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        
        return this.products.filter((product: IProduct) => 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {this.products=products;
        this.filterProducts = this.products;}
             ,
            error:err => this.errorMessage=err});
        
    
       
    }

    toggleImage(): void {
        this.showImage = ! this.showImage;
    }
}