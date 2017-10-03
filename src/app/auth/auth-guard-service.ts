import { AuthService } from "app/auth/auth.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate
{

    constructor(private authService: AuthService){}
 // here we are allowing only authenticated user to look for edit recipe component
 // everyone cannot allowed to edit component 
 // CanActivate is implemented in app-Routing module
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
    { // we are checking if the token is present
        
        return this.authService.isAuthenticated();
    }
    
}