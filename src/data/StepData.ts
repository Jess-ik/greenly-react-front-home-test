import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  salmon,
  mustard,
  potatoes,
  asparagus,
  oliveOil,
  lemon
} from "./IngredientData";

import { StepType as StepType } from "../types/StepType";

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsFondantChocolat: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsTarteAuxPoires: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 3,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 4,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 5,
  },
];

export const stepsSalmon: StepType[] = [
  {
    description: "Dans un bol, mélangez la moutarde avec l'huile et le jus d'1/2 citron.",
    order: 1,
    ingredients: [
      { ingredient: mustard, quantity: 1, unit: "cs" },
      { ingredient: oliveOil, quantity: 1, unit: "cc" },
      { ingredient: lemon, quantity: 1/2 },
    ],
  },
  {
    description:
      "Badigeonnez le filet de saumon avec cette préparation et laissez mariner au moins 30 minutes (le temps que vous prépareriez les pommes de terre et jusqu'à ce que vous deviez enfourner le saumon).",
    order: 2,
  },
  {
    description:
      "Préchauffez le four à 200°C, chaleur traditionnelle.",
    order: 3,
  },
  {
    description:
      "Préparez les pommes de terre : coupez-les en 2 (4 si elles sont plus grosses). Vous pouvez les faire tremper dans un bol d'eau salée pendant au moins 15-20 minutes si vous voulez qu'elles soient bien croustillantes, sinon passez à l'étape suivante.",
    order: 4,
  },
  {
    description:
      "Mélangez les pommes de terre avec l'huile, le thym séché et du sel et placez-les sur une plaque de cuisson.",
    order: 5,
  },
  {
    description:
      "Enfournez pour 30-35 minutes.",
    order: 6,
  },
  {
    description:
      "Pendant ce temps, préparez les asperges. Ecussonnez-les, puis badigeonnez avec l'huile et ajoutez une bonne pincée de sel.",
    order: 7,
  },
  {
    description:
      "Quand les 30 minutes de cuisson des pommes de terre sont passées, sortez la plaque du four et ajoutez le filet de saumon, les asperges et le demi citron qu'il reste (coupez-le en tranches ou quartiers).",
    order: 8,
  },
  {
    description:
      "Enfournez toujours à mi-hauteur et à la même température pour 12 minutes.",
    order: 9,
  },
  {
    description:
      "Et ensuite, placez la plaque sous le grill du four, fonction grill à 220°C pour 3 minutes environ (surveillez bien, les aliments peuvent vite brûler sous le grill).",
    order: 10,
  },
  {
    description:
      "Sortez la plaque du four, ajoutez du thym frais et servez. Dégustez!",
    order: 11,
  },

];
