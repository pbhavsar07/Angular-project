

import { NgModule } from "@angular/core";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";
// adding NgModule toturn the normal component into Module
// shared module is a commonModule  that is something we can use 

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [ 
        CommonModule,
        DropdownDirective,
        
    ]
})
export class SharedModule{}



/* w generally use export to export routing modulesi.e configured routing modules
now we should use the drop down dorective

the idea behind the shared module is we can now be able to import the shared module into
another module and therefore be able to use the drop down dorective.
and to use that drop down directive we have to export it


we also have to export it because - by default everything you set upin the module is only
    available in that module and it isn't accessible from outside 
    to make some features some components accessible from outside you have
     to explicitly export them like we do in the drop down directive
*/

/*
building up of Core Module -

Things like the app-header which belongs to only core of our application and to the root
should be put in core Module
Core module would be combination of component and Directive

we can also use the core module to basically bundle all of our imports nad the providers 
in there bcz unlike the shared module unlike the Shared module the core module will only be 
imported by te root module i.e the App-Module so there having a providers array is not an 
issue bcoz it is not a shared module

we are not sharing with other module so we cannot getthe behaviour

*/ 


/**
 * better we do not provide provider[services] in shared modules but can  proviide them into different multiple modules
 * which may change how they are provided, if you add them to a lazy load module for example
 * 
 * 
 * now what we have done is delete the providers aray from app.module and put them into core module and they will show 
 * same behavoir as they sets up at  a same time i.e eagerly. (and just import CoreModule in app.module.ts)
 * 
 * // this will then be application wide,
 *  now removing the AuthGuard as it only applies to Recipe module only.so adding Auth Guard to RecipesRoutingModule
 * so we provide service of AuthGuard to RecipeRoutingModule
 * 
 * what we have done here is we provide service only when RecipeRoutingMOdule is invoke then only this AuthGuard Service will invoke.
 * so this is indeed a lazy loading performance booster
 */