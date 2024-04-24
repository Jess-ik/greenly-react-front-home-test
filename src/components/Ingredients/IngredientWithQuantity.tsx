import Ingredient from "./Ingredient";
import { IngredientWithQuantityType } from "../../types/IngredientWithQuantityType";

export const IngredientWithQuantity = ({
  ingredientWithQuantity,
}: {
  ingredientWithQuantity: IngredientWithQuantityType;
}) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {ingredientWithQuantity.quantity}
      {ingredientWithQuantity.unit}
      &nbsp;
      {ingredientWithQuantity.ingredient.prefix}
      &nbsp;
      <Ingredient
        ingredient={ingredientWithQuantity.ingredient}
        quantity={ingredientWithQuantity.quantity}
      />
    </div>
  );
};
