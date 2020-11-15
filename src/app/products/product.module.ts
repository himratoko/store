import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { convertedToSpacesPipes } from '../shared/converted-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PostCommentComponent } from '../post-comment/post-comment.component';




@NgModule({
  declarations: [
    ProductListComponent, 
    ProductDetailComponent,
    PostCommentComponent,
    convertedToSpacesPipes 
    ],
imports: [
    
    RouterModule.forChild([
      { path: 'products',component:ProductListComponent},
      {path: 'products/:id',
      canActivate:[ProductDetailGuard],
      component:ProductDetailComponent}
    ]),
    SharedModule,
    CommonModule
  
  ]

  
})
export class ProductModule { }
