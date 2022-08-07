import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/products/models/product';
import { ProductsModule } from '../products.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiControllerUrl: string = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Product[]> {
    // `` -> ALTGR + , (virgül)
    return this.httpClient.get<Product[]>(this.apiControllerUrl); // get request'i hazır.
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`);
  }

  // add

  // update

  // delete
}
