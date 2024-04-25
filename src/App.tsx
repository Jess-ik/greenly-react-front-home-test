import { useEffect, useState } from "react";
import "./reset.css";
import "./styles.css";
import { TagType } from "./types/TagType";
import { allRecipes } from "./data/RecipeData";
import { tagList } from "./data/TagData";
import { Tags } from "./components/Tags/Tags";
import Recipes from "./components/Recipes/Recipes";



export default function App() {

	// Store selected tags
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	// Handle storing/removing tags on click
  const handleClick = (tag: TagType) => {
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
    if (selectedTags.length === 0) {
      return allRecipes;
    } // else filter recipes that contains every selectedtags
    else {
      return allRecipes.filter((recipe) => {
        return selectedTags.every(item => recipe.tags.some(tag => tag.id === item))
      })
    }
  };


	return (
    <div className="App">
      <h1>Livre des recettes Grennly</h1>
			Liste des recettes
      <Tags tags={tagList} handleClick={handleClick} selectedTags={selectedTags} /> 
      {/* TO DO : find solution to resolve type error to show tag.name.fr instead of tag.id */}
      <p>Voici les recettes pour : {selectedTags.map((tag) => <span>{tag} </span>)}</p>

      
			<Recipes recipes={filteredRecipes()} handleClick={handleClick} selectedTags={selectedTags}/>
		</div>
	);
}
