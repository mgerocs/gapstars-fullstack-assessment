import { Item } from "../../api/types";

export function groupByIndustry(list: Item[]) {
  // We need to group the companies by industry
  // The return value should be an object where the keys are the industry names
  // E.g. { "Healthcare": [Item, Item, Item], "Finance": [Item, Item], ... }
  const companiesByIndustry = list.reduce((acc, item) => {
    item.industries.forEach((industry) => {
      // If the industry name is not a key in the accumulator yet, we add it with an empty array as the value
      if (!acc[industry.name]) {
        acc[industry.name] = [];
      }
      // If the industry name is already a key in the accumulator, we push the item to the array
      acc[industry.name].push(item);
    });
    return acc;
  }, {} as Record<string, Item[]>); // The empty object is the initial value of the accumulator

  // We need to sort the companies by name for each industry
  Object.entries(companiesByIndustry).forEach(([_, companies]) => {
    companies.sort((a, b) => a.name.localeCompare(b.name));
  });

  return companiesByIndustry;
}
