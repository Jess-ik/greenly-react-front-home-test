import { useEffect, useState } from "react";
import "./styles.css";
import Recipes from "./components/Recipes/Recipes";
import { allRecipes, sugarRecipes, summerRecipes, dessertRecipes, noEggsRecipes, chocolateRecipes, autumnRecipes, veganRecipes, chocolateDessertRecipes } from "./data/RecipeData";

import { tagList } from "./data/TagData";
import { Tags } from "./components/Tags/Tags";
import { Tag } from "./components/Tags/Tag";
import { TagType } from "./types/TagType";

export default function App() {
	const [filter, setFilter] = useState<string>("all");

	// Store selected tags
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	// Handle storing/removing tags on click
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, tag: TagType) => {
    // if tag already stored, remove it
    if (selectedTags.includes(tag.id)) {
      setSelectedTags(prevTags => prevTags.filter(item => item !== tag.id));
    } // else add it
    else {
      setSelectedTags(prevTags => [...prevTags, tag.id]);
    }	
  };
  
  useEffect(() => {
    console.log("Voici les tags sélectionnés : " + selectedTags);
  }, [selectedTags]);

	// Handle recipes filtering
	const filteredRecipes = () => {
		// if selectedTags empty, show all recipes
		// else, show recipes that contains every selected tags
	};

	return (
		<div className="App">
			Liste des recettes
			{/* <Tags tags={tagList} /> */}
			<div
				style={{
					margin: "10px",
					padding: "5px",
					borderRadius: "3px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}>
				{tagList.map((tag) => (
					<div
						style={{
							margin: "10px",
							padding: "5px",
							borderRadius: "3px",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							backgroundColor: `${tag.color}`,
            }}
            onClick={(event) => handleClick(event, tag)}
>
						{tag.name.fr}
					</div>
				))}
			</div>
			{/* 
      <>
				{" "}
				<button onClick={() => setFilter("chocolate")}>Chocolat</button>
				<button onClick={() => setFilter("sugar")}>Sucre</button>
				<button onClick={() => setFilter("summer")}>Eté</button>
				<button onClick={() => setFilter("dessert")}>Dessert</button>
				<button onClick={() => setFilter("chocolate dessert")}>dessert chocolat</button>
				<button onClick={() => setFilter("eggs free")}>Sans Oeufs</button>
				<button onClick={() => setFilter("autumn")}> Autumn</button>
        <button onClick={() => setFilter("vegan")}> Vegan</button>
        {filter === "all" && <Recipes recipes={allRecipes} />}
			{filter === "sugar" && <Recipes recipes={sugarRecipes} />}
			{filter === "summer" && <Recipes recipes={summerRecipes} />}
			{filter === "dessert" && <Recipes recipes={dessertRecipes} />}
			{filter === "chocolate dessert" && <Recipes recipes={chocolateDessertRecipes} />}
			{filter === "eggs free" && <Recipes recipes={noEggsRecipes} />}
			{filter === "chocolate" && <Recipes recipes={chocolateRecipes} />}
			{filter === "autumn" && <Recipes recipes={autumnRecipes} />}
      {filter === "vegan" && <Recipes recipes={veganRecipes} />}
			</> 
      */}
			<Recipes recipes={allRecipes} />
		</div>
	);
}
