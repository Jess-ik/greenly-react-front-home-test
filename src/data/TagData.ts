import { TagType } from "../types/TagType";

//Add spring tag
export const spring: TagType = {
  id: "spring",
  name: {
    fr: "printemps",
    en: "spring",
  },
  type: "saison",
  color: "pink",
};

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "yellow",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "blue",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "purple",
};

//Add main course tag
export const mainCourse: TagType = {
  id: "main",
  name: {
    fr: "plat",
    en: "main course",
  },
  type: "plateType",
  color: "brown",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
  color: "#e320bd",
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
