
import { Injectable } from "@angular/core";
//import {  Response,Http} from "@angular/http";
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import 'rxjs/Rx'
import { AuthService } from "app/auth/auth.service";
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";

@Injectable()
export class DataStorageService
{
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
             private authservice: AuthService ){}

storeRecipe()
  {
       const token = this.authservice.getToken();
      const header = new HttpHeaders().set('Authorization','paragbhavsar');
   
      // returning an observable                                                  // we are using 1 queryparamter here - ?auth='token' - we can remove there and add in object parameter - as shown below 
/*      return this.httpClient.put('https://ng-recipe-book-78502.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes(),
    {// third argument as object/optional argument
      observe: 'body' // bydefault it was response type - 'body' , we made it to 'events' - this is all oabout listenning events
      //headers: header  // creating header object now.
      // params: new HttpParams().set('auth',token)   // // we are using 1 queryparamter here - ?auth='token' - we can remove there and add in object parameter - as shown beside 

    });
*/ 
// creating httpClient request but with different style - just to enable Progress(UploadProgress and download Progress) of the App

const req = new HttpRequest('PUT','https://ng-recipe-book-78502.firebaseio.com/recipes.json','this.recipeService.getRecipes()',
  {
    reportProgress: true,
    params: new HttpParams().set('auth',token)
  })
  return this.httpClient.request(req);

      // we are getting a copy of original array of reciipe from getRecipes() and 
    // then sending passing this array to put method , put method will turn that array into jason foramt 
  // and once triggered like once subscribed that put method returns this will send the put request to the server 


  }
  getRecipes()
  {
        // need to check if our ingrdient is available or not in our dtabase else it will throw an eror 
 const token = this.authservice.getToken();

     // this.httpClient.get<Recipe[]>('https://ng-recipe-book-78502.firebaseio.com/recipes.json?auth='+token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-78502.firebaseio.com/recipes.json?auth='+token, {
        observe: 'body', // if observe: body then it will fetch text and not json object, observe: 'response' provides full response
        responseType: 'json'// default is json, can also use 'blob' - to dwnload a file, arraybuffer - if u want to buffer some data, most common is json,text-> provides you with json object but with text type
        // observe with not automatically extract the data(body data) of response but will give full reponse
    })
     .map( //recipes here is a type(return type) of Recipe Array - type of data we get in this json data
        (recipes) => {
          console.log(recipes);
//const recipes: Recipe[] = response.json();  no need to extract the response from json call , now httpClient can do that of its own.
          for(let recipe of recipes) // looping through all recipe and checing for ingredient
                {
                    if(!recipe['ingredients'])
                      {console.log(recipe);
                        recipe['ingredients']=[];
                      }
                }
            return recipes ;
                //  return [];
          }

    )
    .subscribe(
       (recipes: Recipe[]) => { 
         this.recipeService.setRecipe(recipes);
        }   
        );
  } 


}
