import { useEffect, useState } from "react";
import "./reset.css";
import "./styles.css";
import { TagType } from "./types/TagType";
import { allRecipes } from "./data/RecipeData";
import { tagList } from "./data/TagData";
import { Tags } from "./components/Tags/Tags";
import Recipes from "./components/Recipes/Recipes";
import Logo from "./components/Logo/Logo";

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
  // Handle filters reset
	const resetFilter = () => {
		setSelectedTags([]);
	};

	// useEffect(() => {
	// 	console.log("Voici les tags sélectionnés : " + selectedTags);
	// }, [selectedTags]);

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

			<section className="filter-container">
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
			</section>

			<section className="results-container">
				{selectedTags.length > 0 && (
					<div className="results-info">
						<div className="results-tags">
							<h3>Voici les recettes pour :</h3>
							<div>
								{selectedTags.map((tag, index) => (
									<span key={index}>{tag}</span>
								))}
							</div>
						</div>

						<button className="reset-button" onClick={resetFilter}>
							X Réinitialiser la recherche
						</button>
					</div>
				)}

				{filteredRecipes().length === 0 && (
					<div className="noresults-container">
						<p>Oh non... 😢 Nous n'avons pas encore de recette disponible pour les tags sélectionnés. </p>
					</div>
				)}
			</section>

			<Recipes recipes={filteredRecipes()} handleClick={handleClick} selectedTags={selectedTags} />
		</div>
	);
}
