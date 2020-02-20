import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static readonly productEndpoint = environment.urlApi + '/api/product';

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(ProductService.productEndpoint, product);
  }

  save(product: Product): Observable<Product> {
    return this.http.put<Product>(ProductService.productEndpoint, product);
  }

  delete(barcode: string): Observable<void> {
    return this.http.delete<void>(`${ProductService.productEndpoint}/${barcode}`);
  }

  findById(barcode: string): Observable<Product> {
    return this.http.get<Product>(`${ProductService.productEndpoint}/${barcode}`);
  }

  findAll(name?: string): Observable<Product[]> {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get<Product[]>(ProductService.productEndpoint, { params });
  }

}
