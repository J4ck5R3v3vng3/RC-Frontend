import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from './Entity/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private url = 'http://localhost:8080';

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAllIngredients() {
    return this.httpClient.get<Ingredient[]>(`${this.url}/zutaten`);
  }

}
