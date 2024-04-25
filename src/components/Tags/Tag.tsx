import { useState } from "react";
import { TagType } from "../../types/TagType";

export const Tag = ({ tag, handleClick, selectedTags }: { tag: TagType; handleClick: (tag: TagType) => void; selectedTags: any }) => {
	return (
		<div
			className="tag"
			style={{
				borderColor: selectedTags.includes(tag.id) ? tag.color : "#0f1118",
				backgroundColor: selectedTags.includes(tag.id) ? tag.color : "transparent",
			}}
			onClick={() => handleClick(tag)}>
			{tag.name.fr}
		</div>
	);
};
