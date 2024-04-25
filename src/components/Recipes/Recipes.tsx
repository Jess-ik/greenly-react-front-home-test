import "./Recipes.css";
import { ListOfRecipes } from "../../types/RecipeType";
import { TagType } from "../../types/TagType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes, handleClick }: { recipes: ListOfRecipes, handleClick: (tag: TagType) => void }) => {
  return (
    <div className="recipes-container"
      
    >
      
        {recipes.map((obj) => (
          <Recipe recipe={obj} handleClick={handleClick}/>
        ))}
      
    </div>
  );
};

export default Recipes;
