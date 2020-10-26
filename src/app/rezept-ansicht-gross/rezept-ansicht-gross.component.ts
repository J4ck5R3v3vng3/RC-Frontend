import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../Entity/Ingredient';
import { RecipeToIngredientAmount } from '../Entity/RecipeToIngredientAmount';
import { Recipe } from '../Entity/Recipe';
import { RecipeService } from '../recipe.service';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-rezept-ansicht-gross',
  templateUrl: './rezept-ansicht-gross.component.html',
  styleUrls: ['./rezept-ansicht-gross.component.css']
})
export class RezeptAnsichtGrossComponent implements OnInit {

  recipe: Recipe = null;
  transferList: RecipeToIngredientAmount[] = [];
  ingredientList: Ingredient[] = [];

  displayedPortionFactor: number = 1;
  ingredientPortionFactor: number = 1;


  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeService.getOneRecipe(params.id).subscribe(recipeToShow => {
        this.recipe = recipeToShow;
        this.transferList = this.recipe.recipeToIngredientAmountList;

        this.initializeIngredientsAndPortions(this.transferList);
      });

    })
  }

  initializeIngredientsAndPortions(transferList: RecipeToIngredientAmount[]){

    for(let item of this.transferList){
      let ingredient = new Ingredient(item.ingredient.name, item.amountFactor, item.ingredient.totalUnit);
      this.ingredientList.push(ingredient);
    }
    this.displayedPortionFactor = this.recipe.howManyPortions;
  }

  onChangePortions(){
    this.ingredientPortionFactor = this.displayedPortionFactor / this.recipe.howManyPortions;
  }

}
