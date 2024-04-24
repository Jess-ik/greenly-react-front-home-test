import { IngredientType } from "./IngredientType";
import { StepType } from "./StepType";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import { TagType } from "./TagType";

export type RecipeType = {
  nom: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  etapes?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
};

export type ListOfRecipes = RecipeType[];
