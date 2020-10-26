
export class Ingredient {

  name: string;
  amount: number;
  totalUnit: string;

  constructor(name: string, amount: number, totalUnit?: string) {
    this.name = name;
    this.amount = amount;
    this.totalUnit = totalUnit;
  }

  getName() {
    return this.name;
  }



// Brauchen wir wahrscheinlich nicht, habe ich der Vollständigkeit
// halber dennoch mit übertragen.

  // totalUnit: UnitOfMeasure;
  // calPerTotalUnit: number;
  // carbsPerTotalUnit: number;
  // proteinsPerTotalUnit: number;
  // fatPerTotalUnit: number;
  // recipeList: Recipe[];
}
