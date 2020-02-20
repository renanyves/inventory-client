import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private static readonly CategoryEndpoint = environment.urlApi + '/api/category';

  constructor(private http: HttpClient) { }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(CategoryService.CategoryEndpoint, category);
  }

  save(category: Category): Observable<Category> {
    return this.http.put<Category>(CategoryService.CategoryEndpoint, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${CategoryService.CategoryEndpoint}/${id}`);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(`${CategoryService.CategoryEndpoint}/${id}`);
  }

  findAll(name?: string): Observable<Category[]> {
    let params = new HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get<Category[]>(CategoryService.CategoryEndpoint, { params });
  }

}
