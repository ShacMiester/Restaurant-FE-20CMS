import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.body)
    // req = req.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //     'Authorization': 'Bearer key',
    //     // 'Authorization': `Bearer ${token}`,
    //   },
    // });

    return next.handle(req);
  }
}
