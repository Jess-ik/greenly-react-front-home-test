import { IngredientWithQuantityType } from "./IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};
