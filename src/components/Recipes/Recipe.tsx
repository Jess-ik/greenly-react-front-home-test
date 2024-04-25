import "./Recipes.css";
import { RecipeType } from "../../types/RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
import { Tags } from "../Tags/Tags";
import { TagType } from "../../types/TagType";

export const Recipe = ({ recipe, handleClick }: { recipe: RecipeType; handleClick: (tag: TagType) => void }) => {
	const [showSteps, setShowSteps] = useState<Boolean>(false);
	const [showIngredients, setShowIngredients] = useState<boolean>(false);

	return (
		<div className="recipe-card">
			<img src={recipe.imageURL} alt={recipe.nom} />
			<div className="recipe-card-info">
				<h2>Nom de la recette: {recipe.nom}</h2>
				<div
					style={{
						padding: "10px",
					}}>
					{recipe.description}
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					<Tags tags={recipe.tags} handleClick={handleClick} />
				</div>
				<div
					style={{
						backgroundColor: "blanchedalmond",
						padding: "10px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}>
					Ingrédients:
					<button onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? "Masquer" : "Afficher"}</button>
					{showIngredients && <IngredientsWithQuantity ingredientsWithQuantity={recipe.ingredientsWithQuantity} />}
				</div>
				<div
					style={{
						padding: "10px",
						display: "flex",
						flexDirection: "column",
						alignContent: "flex-start",
						alignItems: "flex-start",
					}}>
					<div
						style={{
							padding: "10px",
							display: "flex",
							flexDirection: "column",
						}}>
						Etapes de la recette:
						<button onClick={() => setShowSteps(!showSteps)}>{showSteps ? "Masquer" : "Afficher"}</button>
					</div>
					{recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
				</div>
			</div>
		</div>
	);
};

export default Recipe;
