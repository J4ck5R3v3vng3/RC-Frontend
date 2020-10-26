import { DietType } from './ENUM_DietType';
import { RecipeToIngredientAmount } from './RecipeToIngredientAmount';

export class Recipe {

  // ATTRIBUTE

  recipeID: string;
  title: string;
  teaser: string;

  howManyPortions: number;
  instructions: string;
  calPerPortion: number;
  carbsPerPortion: number;
  fatPerPortion: number;
  proteinsPerPortion: number;

  cuisine: string;
  prepTime: number;
  dishType: string;

  dietList: DietType[];
  recipeToIngredientAmountList: RecipeToIngredientAmount[];

  pictureURL: string;

  // KONSTRUKTOR

  constructor(
    title: string,
    teaser: string,

    howManyPortions: number,
    instructions: string,

    cuisine: string,
    prepTime: number,
    dishType: string,

    dietList: DietType[],

    pictureURL: string) {
    this.title = title,
    this.teaser = teaser,
    this.howManyPortions = howManyPortions,
    this.instructions = instructions,
    this.cuisine = cuisine,
    this.prepTime = prepTime,
    this.dishType = dishType,
    this.dietList = dietList,
    this.pictureURL = pictureURL
    }

  // userRatingAndCommentList: UserRatingAndComment[];

}
