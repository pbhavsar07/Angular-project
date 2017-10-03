import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validator, Validators } from "@angular/forms";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
            private recipeService: RecipeService,
            private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm()
  {
     let recipeName ="";
     let recipeImagePath = "";
     let recipeDescription  = "";
     let recipeIngredients = new FormArray([]);

    if(this.editMode)
      {
        const recipe=this.recipeService.getRecipe(this.id);
        recipeName=recipe.name;
        recipeImagePath=recipe.imagePath;
        recipeDescription = recipe.description;
        if(recipe['ingredients'])
          {
            for (let ingredients of recipe.ingredients)
              {
                recipeIngredients.push(new FormGroup(
                  {
                    'name': new FormControl(ingredients.name,Validators.required),
                    'amount': new FormControl(ingredients.amount,[
                      Validators.required,
                      Validators.pattern(/^[1-9]+[0-9]*$/)
                    ])
                  })
                 );
              }
          }
      }
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName,Validators.required),
        'imagePath': new FormControl(recipeImagePath,Validators.required),
        'description': new FormControl(recipeDescription,Validators.required),
        'ingredients': recipeIngredients
      });

  }
  oncancel()
  {
    this.router.navigate(['../'],{relativeTo: this.route});
  }
  onSubmit()
  {
    //recipe constructor
     const newRecipe = new Recipe(
       this.recipeForm.value['name'],
       this.recipeForm.value['description'],
       this.recipeForm.value['imagePath'],
       this.recipeForm.value['ingredients']);

       if(this.editMode)
        {
          this.recipeService.updateRecipe(this.id,newRecipe);
       //    this.recipeService.updateRecipe(this.id,this.recipeForm.value); // as the coonst newRecipe is in order we can put this.recipeForm.value directly it will come one by one. 
        }
       else
        {
          this.recipeService.addRecipe(this.recipeForm.value);
          // this only wont work- when we get an copy of recipe from recipeServer from getRecipes function we get slice() of that array which is not updated. which is an old copy(Slice)
          // hence need to subscribe an Subject in recipe-list i.e  listen to an event in recipe-list that is passed as second statement in addrecipe and upadte recipe 
        }
        this.oncancel();
  }
  onAddIngredient() // need to add new Control to this array of form control
  {
// casting it to type FormArray as we know that this will beFormArray so no error
// check the syntax
(<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)  
      ])
    })
);

  }
onDeleteIngredient(index: number)
{
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
}
}
