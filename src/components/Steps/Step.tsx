import "./Steps.css"
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { StepType } from "../../types/StepType";

export const Step = ({ etape }: { etape: StepType }) => {
	return (
		<div>
			<div className="step-description">
				{etape.order}. {etape.description}
			</div>
			<div className="step-ingredients">
				{etape.ingredients && <IngredientsWithQuantity ingredientsWithQuantity={etape.ingredients} />}
			</div>
		</div>
	);
};

export default Step;
