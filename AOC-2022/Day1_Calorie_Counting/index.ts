import { join } from "path";
import { readFileSync } from "fs";

const input = readFileSync(join(__dirname, "input.txt"), "utf8");
const ELVES_CALORIES = input.trim().split("\n");

export const formatElfArray = (): Map<number, number> => {
  let elfCount = 0;
  let caloriesCount = 0;
  const elves = new Map<number, number>();

  ELVES_CALORIES.forEach((calories, i) => {
    if (calories.length > 0) {
      caloriesCount += Number(calories);
    } else {
      ++elfCount;
      elves.set(elfCount, caloriesCount);
      caloriesCount = 0;
    }

    if (ELVES_CALORIES.length - 1 === i) {
      ++elfCount;
      elves.set(elfCount, caloriesCount);
    }
  });

  return elves;
};

export const solution = (): number => {
  let maxCalories = 0;
  let elfSelected: string = "";
  const elvesMap = formatElfArray();
  
  elvesMap.forEach((caloriesByElf, i) => {
    if (caloriesByElf > maxCalories) {
      maxCalories = caloriesByElf;
      elfSelected = `elfo Nº ${i}`;
    }
  });

  console.log(`el elfo que mas calorias tiene es el ${elfSelected}`);
  console.log(maxCalories);
  return maxCalories;
};

solution();
