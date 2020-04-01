import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {UserInformationService} from '../user-information.service';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  constructor(public  auth: AuthService,
              private userInfo: UserInformationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken(this.userInfo.userInfo.email)}`
      }
    });
    return next.handle(req);
  }
}
