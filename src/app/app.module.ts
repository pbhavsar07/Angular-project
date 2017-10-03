import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from "app/recipes/recipe.service";
import { DataStorageService } from "app/shared/data-storange.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard-service";
import { SharedModule } from "app/shared/shared.module";
import { ShoppingListModule } from "app/shopping-list/shopping-list.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent  // great that we have only AppComponent as a declaration in app.module
  ],
  imports: [
    BrowserModule,  // Browser Module contains all the features of CommonModule and bunch of other  module that is only needed when the applliction starts , so preferably use Browser Module in app module and common Module in feature module
//    HttpModule,  http module gives us the Http method , post method ,put method , get method. but HttpModule is of 2.0 and we have new httpClient coming up in angular 4 so implementing that
    HttpClientModule, // new client 
   AppRoutingModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    CoreModule
  ],
  /*  providers: [
      ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService
    //,AuthGuard
],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
