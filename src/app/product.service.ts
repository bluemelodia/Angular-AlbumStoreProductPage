import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album';
import { Product } from './product';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  /*
   * pipe: method on an Observable that's composes operators (ex. map, filter)
   * map: operator that transforms data by applying a function
   *
   * note: all operators return observables
   */
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
      .map(response => <Product[]>response.json());
  }
}
