import { Item } from "../../api/types";

export function groupByIndustry(list: Item[]): Record<string, Item[]> {
  // We need to group the companies by industry
  // The return value should be an object where the keys are the industry names
  // E.g. { "Healthcare": [Item, Item, Item], "Finance": [Item, Item], ... }
  const companiesByIndustry = list.reduce(
    (acc, item) => {
      item.industries.forEach((industry) => {
        // We only add the item to the record if we haven't seen it yet
        if (!acc.seen.has(item.uuid)) {
          // If the industry name is not a key in the accumulator yet, we add it with an empty array as the value
          if (!acc.grouped[industry.name]) {
            acc.grouped[industry.name] = [];
          }
          // If the industry name is already a key in the accumulator, we push the item to the array
          acc.grouped[industry.name].push(item);
        }
        acc.seen.add(item.uuid);
      });
      return acc;
    },
    { seen: new Set(), grouped: {} as Record<string, Item[]> } // We can use a Set() to keep track of what companies we've already seen
  );

  // We need to sort the companies by name for each industry
  Object.entries(companiesByIndustry.grouped).forEach(([_, companies]) => {
    companies.sort((a, b) => a.name.localeCompare(b.name));
  });

  return companiesByIndustry.grouped;
}
