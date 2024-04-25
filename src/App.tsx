import { useEffect, useState } from "react";
import "./reset.css";
import "./styles.css";
import { TagType } from "./types/TagType";
import { allRecipes } from "./data/RecipeData";
import { tagList } from "./data/TagData";
import { Tags } from "./components/Tags/Tags";
import Recipes from "./components/Recipes/Recipes";
import Logo from "./components/Logo/Logo";
import { Tag } from "./components/Tags/Tag";

export default function App() {
	// Store selected tags
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	// Handle storing/removing tags on click
	const handleClick = (tag: TagType) => {
		// if tag already stored, remove it
		if (selectedTags.includes(tag.name.fr)) {
			setSelectedTags((prevTags) => prevTags.filter((item) => item !== tag.name.fr));
		} // else add it
		else {
			setSelectedTags((prevTags) => [...prevTags, tag.name.fr]);
		}
	};

	useEffect(() => {
		console.log("Voici les tags sélectionnés : " + selectedTags);
	}, [selectedTags]);

	// Handle recipes filtering
	const filteredRecipes = () => {
		// if selectedTags empty, show all recipes
		if (selectedTags.length === 0) {
			return allRecipes;
		} // else filter recipes that contains every selectedtags
		else {
			return allRecipes.filter((recipe) => {
				return selectedTags.every((item) => recipe.tags.some((tag) => tag.name.fr === item));
			});
		}
	};

	return (
		<div className="App">
			<h1>
				<Logo /> Le livre des recettes
			</h1>

			<div className="filter-container">
				<h2>De quoi avez-vous envie ?</h2>
				<div className="filters">
					<div className="filter-cat">
						<p>Filtrer par saison :</p> <Tags tags={tagList.filter((tag) => tag.type === "saison")} handleClick={handleClick} selectedTags={selectedTags} />
					</div>
					<div className="filter-cat">
						<p>Filtrer par plat :</p> <Tags tags={tagList.filter((tag) => tag.type === "plateType")} handleClick={handleClick} selectedTags={selectedTags} />
					</div>
					<div className="filter-cat">
						<p>Filtrer par régime :</p> <Tags tags={tagList.filter((tag) => tag.type === "diet")} handleClick={handleClick} selectedTags={selectedTags} />
					</div>
				</div>
			</div>

			<div className="recipes-results">
				<h3>
          Voici les recettes pour :
          <div>{selectedTags.map((tag, index) => (
            <span key={index}>{tag}</span>
					))}</div>
				</h3>

				<Recipes recipes={filteredRecipes()} handleClick={handleClick} selectedTags={selectedTags} />
			</div>
		</div>
	);
}
