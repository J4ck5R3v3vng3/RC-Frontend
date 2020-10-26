import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Recipe } from 'src/app/Entity/Recipe';
import { Cuisine } from '../Entity/ENUM_Cuisine';
import { DietType } from '../Entity/ENUM_DietType';
import { DishType } from '../Entity/ENUM_DishType';
import { Ingredient } from '../Entity/Ingredient';
import { RecipeAndIngredientTranfser } from '../Entity/recipe-and-ingredient-tranfser';
import { IngredientService } from '../ingredient.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-rezept-formular',
  templateUrl: './rezept-formular.component.html',
  styleUrls: ['./rezept-formular.component.css'],
})
export class RezeptFormularComponent implements OnInit {

  // FORMULAR-GRUPPE-KOMPLETT

  recipeForm = new FormGroup({
    recipeTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(70),
    ]),
    description: new FormControl(''),
    duration: new FormControl(null, [Validators.required]),
    howManyPortions: new FormControl(null, [Validators.required]),
    pictureURL: new FormControl('', [Validators.required]),
    ingredientForm: new FormGroup({}),
    instructionSteps: new FormArray([new FormControl('')])
  });

  // REZEPT-ZUTATEN

  ingredientForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private fbIngredient: FormBuilder
  ) {
    this.ingredientForm = this.fbIngredient.group(
      {
        ingredientList: this.fbIngredient.array([]),
      },
    );
  }

  ingredientList(): FormArray {
    return this.ingredientForm.get('ingredientList') as FormArray;
  }

  newIngredient(): FormGroup {
    return this.fbIngredient.group({
      ingredientName: '',
      ingredientAmount: '',
      ingredientUnit: [{value: '', disabled: true}, Validators.required]
    });
  }

  addIngredient() {
    console.log('Adding an ingredient');
    this.ingredientList().push(this.newIngredient());
  }

  removeIngredient(ingIndex: number) {
    this.ingredientList().removeAt(ingIndex);
  }

  // Zutaten-Autocomplete

  completeIngredientsList:Ingredient[];

  ngOnInit(): void {

    this.ingredientService.getAllIngredients().subscribe(result => {this.completeIngredientsList = result;});

    this.initForm();

  }

  // REZEPT-ANLEITUNG

  get instructionSteps() {
    return this.recipeForm.get('instructionSteps') as FormArray;
  }

  addInstructionStep() {
    console.log('Adding a Step');
    this.instructionSteps.push(new FormControl(''));
  }

  removeInstruction(instructionIndex: number) {
    this.instructionSteps.removeAt(instructionIndex);
  }

  instructionStringBuilder() {

    let instructionComplete: string = '';
    let instructionsArray = this.instructionSteps.value;

    instructionsArray.forEach(element => {
      instructionComplete = instructionComplete + (instructionsArray.indexOf(element) + 1) + '. ' + element + '\n\n';
    });

    return instructionComplete;
  }

  showInstruction() {
    console.log(this.instructionStringBuilder());
  }

  // REZEPT-TAGS

  //DISHTYPE

  dietTypeForm = new FormGroup({});
  dishTypeForm = new FormGroup({});
  cuisineForm = new FormGroup({});

  dietType = DietType;
  cuisine = Cuisine;
  dishType = DishType;

  selectedDish: string = '';

  dishTypeHandler(event: any) {
    console.log(this.selectedDish = event.target.value);
  }

  selectedCuisine: string = '';

  cuisineHandler(event: any) {
    console.log(this.selectedCuisine = event.target.value);
  }

  // dietList: any[];

  initForm() {
    this.dietTypeForm = this.fbIngredient.group({
      dietList: new FormArray([])
    })
  }

  dietTypeHandler(event: any) {
    const formArray: FormArray = this.dietTypeForm.get('dietList') as FormArray;

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

  sendRecipe() {

      const recipe = new Recipe(
        this.recipeForm.get('recipeTitle').value,
        this.recipeForm.get('description').value,

        this.recipeForm.get('howManyPortions').value,
        this.instructionStringBuilder(),

        this.selectedCuisine,
        this.recipeForm.get('duration').value,
        this.selectedDish,

        this.dietTypeForm.get('dietList').value,

        this.recipeForm.get('pictureURL').value
        )
        console.log(recipe);

        let transferObject = new RecipeAndIngredientTranfser(recipe, this.ingredientList().value)
        console.log(transferObject);

        this.recipeService.saveRecipe(transferObject).subscribe(result => console.log(result));

      }

  onBlurMethod(index){

    index = index.toString();

    console.log(index);
    console.log(this.ingredientForm.get('ingredientList').get(index).get('ingredientName').value);

    //CODE IST HINGEROTZT
    let ingredientName:string = this.ingredientForm.get('ingredientList').get(index).get('ingredientName').value;

    //FILTERFUNKTION alternative?
    let filteredList:Ingredient[] = this.completeIngredientsList.filter(element => element.name == ingredientName);

    let ingredient:Ingredient = filteredList[0];

    this.ingredientForm.get('ingredientList').get(index).get('ingredientUnit').setValue(ingredient.totalUnit);


  }
}
