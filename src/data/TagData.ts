import { TagType } from "../types/TagType";

//Add spring tag
export const spring: TagType = {
  id: "spring",
  name: {
    fr: "printemps",
    en: "spring",
  },
  type: "saison",
  color: "#FBD0D0",
};

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "#F9E9BD",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "#ECBEAB",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "#B6E0EA",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "#B8DDB6",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "#D0B5D7",
};

//Add main course tag
export const mainCourse: TagType = {
  id: "main",
  name: {
    fr: "plat",
    en: "main course",
  },
  type: "plateType",
  color: "#F7B1BC",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "desert",
  },
  type: "plateType",
  color: "#DFC0AF",
};



export const tagList: TagType[] = [
  spring,
  summer,
  autumn,
  winter,
  appetizer,
  mainCourse,
  dessert,
  vegan,
];
