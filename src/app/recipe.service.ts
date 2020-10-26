import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './Entity/Recipe';
import { RecipeAndIngredientTranfser } from './Entity/recipe-and-ingredient-tranfser';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private url = 'http://localhost:8080';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllRecipes() {
    return this.httpClient.get<Recipe[]>(`${this.url}/rezepte`);
  }

  getOneRecipe(id) {
    return this.httpClient.get<Recipe>(`${this.url}/rezepte/${id}`);
  }

  saveRecipe(recipe: RecipeAndIngredientTranfser) {
    return this.httpClient.post<RecipeAndIngredientTranfser>(`${this.url}/rezept/erstellen`, recipe);
  }

}
