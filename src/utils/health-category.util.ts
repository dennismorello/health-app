import {
  bed,
  body,
  flame,
  happy,
  headset,
  heart,
  help,
  infinite,
  leaf,
  medical,
  nutritionOutline,
  pulse,
  readerOutline,
  walk,
} from "ionicons/icons";

import { HealthCategory } from "../models/HealthCategory";

import healthCategories from "../data/health-categories.data.json";

export const getHealthCategory = (slug: string) =>
  healthCategories.find((category) => category.slug === slug);

export const getHealthCategoryIcon = (category: HealthCategory) => {
  switch (category.slug) {
    case "activity":
      return flame;
    case "body-measurements":
      return body;
    case "cycle-tracking":
      return leaf;
    case "hearing":
      return headset;
    case "heart":
      return heart;
    case "mindfulness":
      return infinite;
    case "mobility":
      return walk;
    case "nutrition":
      return nutritionOutline;
    case "other-data":
      return medical;
    case "respiratory":
      return happy;
    case "sleep":
      return bed;
    case "symptoms":
      return readerOutline;
    case "vitals":
      return pulse;
    default:
      return help;
  }
};
