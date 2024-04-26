import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";
import "./Tags.css";

export const Tags = ({ tags, handleClick, selectedTags }: { tags: TagType[]; handleClick: (tag: TagType) => void, selectedTags: string[] }) => {
	return (
		<div className="tags-container">
			{tags.map((obj, index) => (
				<Tag key={index} tag={obj} handleClick={handleClick} selectedTags={selectedTags} />
			))}
		</div>
	);
};
