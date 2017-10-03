


import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "app/shopping-list/shopping-edit/shopping-edit.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports:[
        CommonModule,
        FormsModule  // we deleted FormsModule from App Module and placed ithere. but signin and signup needs that formModule
                    //we can export it here or we can create a separate module in auth to import formsModule to run our app   
    ]/*,
                exports:
                [
                    FormsModule
                ] */
})
export class ShoppingListModule{}
