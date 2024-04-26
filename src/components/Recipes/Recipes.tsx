import "./Recipes.css";
import { ListOfRecipes } from "../../types/RecipeType";
import { TagType } from "../../types/TagType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes, handleClick, selectedTags }: { recipes: ListOfRecipes, handleClick: (tag: TagType) => void, selectedTags: string[] }) => {
  return (
    <div className="recipes-container">
      {recipes.map((obj, index) => (
        <Recipe key={index} recipe={obj} handleClick={handleClick} selectedTags={selectedTags} />
      ))}
    </div>
  );
};

export default Recipes;
