import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
recipesChanged = new Subject<Recipe[]>();
// to reflect the changed Recipes in the output so subscibing the event through Subject


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}


  // set Recipe is setting up new updated recipes list

  setRecipe(recipes: Recipe[])
  {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
    // sending up the new updated slice of recipes
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe:Recipe)
  {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
// this will be new copy of our recipe
  }
  updateRecipe(index: number,newRecipe: Recipe)
  {
    this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());  // emitting copy of updatedd Recipe Array
}

deleteRecipe(index: number)
{
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice()); // emitting copy of updatedd Recipe Array
}

}
