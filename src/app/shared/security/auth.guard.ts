import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Util} from "../utils/util";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (!Util.isAutentificado()) {
      this.router.navigateByUrl('auth/login');
    }

    return true;
  }
}
