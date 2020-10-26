import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cuisine } from '../Entity/ENUM_Cuisine';
import { DietType } from '../Entity/ENUM_DietType';
import { DishType } from '../Entity/ENUM_DishType';
import { Ingredient } from '../Entity/Ingredient';
import { Recipe } from '../Entity/Recipe';
import { IngredientService } from '../ingredient.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-rezept-suche',
  templateUrl: './rezept-suche.component.html',
  styleUrls: ['./rezept-suche.component.css']
})
export class RezeptSucheComponent implements OnInit {

  recipeForSearchParameters: Recipe;

  recipeForSearchParametersForm = new FormGroup({
    ingredientWrapper: new FormGroup({
      ingredientField: new FormArray([new FormControl()])
    }),
    prepTime: new FormGroup({}),
    dishTypeForm: new FormGroup({}),
    dietTypeForm: new FormGroup({
      dietTypeArray: new FormArray([new FormControl])
    }),
    cuisineForm: new FormGroup({}),
  })

  ingredientsSearchedFor: Ingredient[] = [];
  completeIngredientsList: Ingredient[];


  dishTypeForm = new FormGroup({});
  cuisineForm = new FormGroup({});

  ingredientWrapper = new FormGroup({
    ingredientField: new FormArray([new FormControl()]),
  })


  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.ingredientService.getAllIngredients().subscribe(result => {this.completeIngredientsList = result;});

    this.initForm();
  }

  addEmptyIngredientField() {
    this.ingredientsSearchedFor.push(new Ingredient('', 0, ''));
  }

  deleteIngredient(index: number) {
    this.ingredientsSearchedFor.splice(index, 1);
  }

  filterForIngredientHandler(event: any) {
    console.log(event.target.value);
  }

  prepTimeList: number [] = [20, 40, 60, 61]

  selectedPrepTime;

  prepTimeHandler(event: any) {
    console.log(this.selectedPrepTime = event.target.value);
  }

  dietType = DietType;
  cuisine = Cuisine;
  dishType = DishType;

    selectedDish: string = '';

    dishTypeHandler(event: any) {
      console.log(this.selectedDish = event.target.value);
    }

    // diets: any[] = [];

    dietTypeForm: FormGroup = new FormGroup({});

    initForm() {
      this.dietTypeForm = this.formBuilder.group({
        diets: new FormArray([])
      })
    }

    dietTypeHandler(event: any) {
      const formArray: FormArray = this.dietTypeForm.get('diets') as FormArray;

      if(event.target.checked) {
        formArray.push(new FormControl(event.target.value));
      } else {
        let i: number = 0;

        formArray.controls.forEach((ctrl: FormControl) => {
          if(ctrl.value == event.target.value) {
            formArray.removeAt(i);
            return;
          }

          i++;

        })
      }
      console.log(formArray);
    }

    selectedCuisine: string = '';

    cuisineHandler(event: any) {
      console.log(this.selectedCuisine = event.target.value);
    }

}
