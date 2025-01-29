import { Item } from "../../api/types";

export function groupByIndustry(list: Item[]): Record<string, Item[]> {
  // We need to group the companies by industry
  // The return value should be an object where the keys are the industry names
  // E.g. { "Healthcare": [Item, Item, Item], "Finance": [Item, Item], ... }
  const companiesByIndustry = list.reduce((acc, item) => {
    item.industries.forEach((industry) => {
      // We only add the item to the record if we haven't seen it yet

      // If the industry name is not a key in the accumulator yet, we add it with an empty array as the value
      if (!acc[industry.name]) {
        acc[industry.name] = [];
      }

      // We check if there are any duplicates and only add the company if it's not already in the array
      if (!acc[industry.name].some((company) => company.uuid === item.uuid)) {
        acc[industry.name].push(item);
      }
    });
    return acc;
  }, {} as Record<string, Item[]>);

  // We need to sort the companies by name for each industry
  Object.entries(companiesByIndustry).forEach(([_, companies]) => {
    companies.sort((a, b) => a.name.localeCompare(b.name));
  });

  return companiesByIndustry;
}
