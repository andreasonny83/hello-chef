export interface Ingredient {
  id: string;
  name: string;
  image: string;
  unit: string;
}

export interface RecipeIngredient extends Ingredient {
  quantity: number;
}

export interface RecipeIngredientItem {
  item: Ingredient;
}

export interface IngredientQuantity {
  id: string;
  quantity: number;
}

export interface RecipeStep {
  position: number;
  image: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  preparationTime: string;
  difficulty: number;
  size: number;
  quantities: IngredientQuantity[];
  ingredients: {
    items: RecipeIngredientItem[];
  };
  steps: RecipeStep[];
}
