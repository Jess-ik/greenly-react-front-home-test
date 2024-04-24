import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags, handleClick }: { tags: TagType[], handleClick: (tag: TagType) => void
}) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((obj, index) => (
        <Tag key={index} tag={obj}  handleClick={handleClick}/>
      ))}
    </div>
  );
};
