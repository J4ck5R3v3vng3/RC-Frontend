import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietType } from 'src/app/Entity/ENUM_DietType';
import { Recipe } from 'src/app/Entity/Recipe';
import { RecipeService } from 'src/app/recipe.service';


@Component({
  selector: 'app-home-rezept-klein',
  templateUrl: './home-rezept-klein.component.html',
  styleUrls: ['./home-rezept-klein.component.css']
})
export class HomeRezeptKleinComponent implements OnInit{

  private recipeService: RecipeService;
  recipe: Recipe[];

  constructor(private route: ActivatedRoute, recipeService: RecipeService) {
    this.recipeService = recipeService;
   }

   ngOnInit(): void {

    this.recipeService
    .getAllRecipes()
    .subscribe(recipeSmall => {
      this.recipe = recipeSmall;

    });

  }


}
