import { useState } from "react";
import "./styles.css";
import Recipes from "./components/Recipes/Recipes";
import {
  allRecipes,
  sugarRecipes,
  summerRecipes,
  dessertRecipes,
  noEggsRecipes,
  chocolateRecipes,
  autumnRecipes,
  veganRecipes,
  chocolateDessertRecipes,
} from "./data/RecipeData";

import { tagList } from "./data/TagData";
import { Tags } from "./components/Tags/Tags";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  return (
    <div className="App">
      Liste des recettes
      
      <Tags tags={tagList} />
      <button onClick={() => setFilter("chocolate")}>Chocolat</button>
      <button onClick={() => setFilter("sugar")}>Sucre</button>
      <button onClick={() => setFilter("summer")}>Eté</button>
      <button onClick={() => setFilter("dessert")}>Dessert</button>
      <button onClick={() => setFilter("chocolate dessert")}>
        dessert chocolat
      </button>
      <button onClick={() => setFilter("eggs free")}>Sans Oeufs</button>
      <button onClick={() => setFilter("autumn")}> Autumn</button>
      <button onClick={() => setFilter("vegan")}> Vegan</button>
      {filter === "all" && <Recipes recipes={allRecipes} />}
      {filter === "sugar" && <Recipes recipes={sugarRecipes} />}
      {filter === "summer" && <Recipes recipes={summerRecipes} />}
      {filter === "dessert" && <Recipes recipes={dessertRecipes} />}
      {filter === "chocolate dessert" && (
        <Recipes recipes={chocolateDessertRecipes} />
      )}
      {filter === "eggs free" && <Recipes recipes={noEggsRecipes} />}
      {filter === "chocolate" && <Recipes recipes={chocolateRecipes} />}
      {filter === "autumn" && <Recipes recipes={autumnRecipes} />}
      {filter === "vegan" && <Recipes recipes={veganRecipes} />}
    </div>
  );
}
