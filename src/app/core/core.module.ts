

import { NgModule } from "@angular/core";
import { HomeComponent } from "app/core/home/home.component";
import { HeaderComponent } from "app/core/header/header.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storange.service";
import { AuthService } from "app/auth/auth.service";

@NgModule({
     declarations: [HeaderComponent,HomeComponent],
     imports : [ SharedModule,AppRoutingModule ],
// importing Shared Module to use the Dropdown directive
// we would need App Roouting MOdule as they Route set up(RouterModule) as we would need routing functionality here
exports: [AppRoutingModule,HeaderComponent],
// we need to export RoutingModule as header would need that also our main app should need a Routing Module
// HeaderComponent is exported as it is used in App Component.html

  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
    //,AuthGuard
],
// this will then be application wide
})
export class CoreModule{}