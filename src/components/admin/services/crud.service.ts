import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperations } from '../entities/CrudOperations';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    @Inject(String) protected _base: string
  ) { }


  save(t: T): Observable<T> {
    return this._http.post<T>(`${environment.storeApi}/` + this._base, t);
  }

  update(t: T | any, id: number): Observable<T> {
    console.log(t)
    return this._http.put<T>(`${environment.storeApi}/` + this._base + `/${id}`, t);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(`${environment.storeApi}/` + this._base + "/" + id);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(`${environment.storeApi}/` + this._base)
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(`${environment.storeApi}/` + this._base + '/' + id);
  }
}
