

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { AuthGuard } from "app/auth/auth-guard-service";

const recipesRoutes: Routes = [
{ path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent,canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent,canActivate: [AuthGuard] },
  ] },

];
@NgModule({
// we need to use forChild here as we are not in root Module we are in the feature Module (child of root)
// if you are setting up routes from the app-routing.module then use forRoot and not forChild

imports: [ 
    RouterModule.forChild(recipesRoutes)
],
exports: [RouterModule],
providers: [AuthGuard]



})
export class RecipesRoutingModule {}

