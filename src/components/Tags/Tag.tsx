import { useState } from "react";
import { TagType } from "../../types/TagType";

export const Tag = ({ tag, handleClick }: { tag: TagType,  handleClick: (tag: TagType) => void }) => {
  const [selectedTag, setSelectedTag] = useState("");
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: `${tag.color}`
      }}
      onClick={() => handleClick(tag)}
    >
      {tag.name.fr}
    </div>
  );
};
