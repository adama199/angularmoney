import { AuthentificationService } from './authentification.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )
  {
    const currentUser = this.authentificationService.currentUserValue;
    if(currentUser){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
    return false;
  }

}


