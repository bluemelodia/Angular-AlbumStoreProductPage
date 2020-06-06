import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  /*
   * pipe: method on an Observable that's composes operators (ex. map, filter)
   * map: operator that transforms data by applying a function
   *
   * note: all operators return observables
   */
  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .map(response => response.json());
  }
}
