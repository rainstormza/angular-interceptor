import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GitHubAuthInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Interceptor');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token c9b9cd6b9065b43071f58c326d5c9014424dada9')
    })

    // return next.handle(req);
    return next.handle(authReq);
  }
}
