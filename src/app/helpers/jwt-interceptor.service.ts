import { AuthentificationService } from './../services/authentification.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class JwtInterceptorService implements HttpInterceptor{
  constructor(
    private AuthentificationService: AuthentificationService
  ){}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
{
  let currentUser = this.AuthentificationService.currentUserValue;
  if(currentUser && currentUser.token){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`
      }
    })

  }
  return next.handle(req);
}
}

