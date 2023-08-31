import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './pages/category/category-detail/category-detail.component';
import { CategoryListingComponent } from './pages/category/category-listing/category-listing.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { ProductListingComponent } from './pages/product/product-listing/product-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductListingComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'new/product', component: ProductDetailComponent },
  { path: 'view/product/:id', component: ProductDetailComponent, data: { action: 'view'} },
  { path: 'category', component: CategoryListingComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'view/category/:id', component: CategoryDetailComponent, data: { action: 'view'}  },
  { path: 'new/category', component: CategoryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
