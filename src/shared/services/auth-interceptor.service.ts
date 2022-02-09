import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'sk_test_51KQqaBLfcqnoO5VBPNdFgYf5xeZs1rH1Ml9FZuGJNqN9n0z4MgYVVcekYzjtAU2oThdRikJ9ilAMsKBIFFBxxB2P000lmdgrsb'
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return next.handle(req);
  }
}
