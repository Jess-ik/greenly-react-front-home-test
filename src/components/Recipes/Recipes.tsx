import { ListOfRecipes } from "../../types/RecipeType";
import { TagType } from "../../types/TagType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes, handleClick }: { recipes: ListOfRecipes, handleClick: (tag: TagType) => void }) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map((obj) => (
          <Recipe recipe={obj} handleClick={handleClick}/>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
