import { TagType } from "../../types/TagType";

export const Tag = ({ tag, handleClick, selectedTags }: { tag: TagType; handleClick: (tag: TagType) => void; selectedTags: string[] }) => {
	return (
		<div
			className="tag"
			style={{
				borderColor: selectedTags.includes(tag.name.fr) ? tag.color : "#0f1118",
				backgroundColor: selectedTags.includes(tag.name.fr) ? tag.color : "transparent",
			}}
			onClick={() => handleClick(tag)}>
			{tag.name.fr}
		</div>
	);
};
