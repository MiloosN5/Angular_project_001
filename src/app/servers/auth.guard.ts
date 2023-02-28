import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private _authService: AuthService,
        private router: Router
    ){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // if user is not loggedIn, redirect him to the "login" (forbid him to access protected route)
        if(this._authService.isLoggedIn != true){
            this.router.navigate(['login']);
        }
        return true;
    }
    
}