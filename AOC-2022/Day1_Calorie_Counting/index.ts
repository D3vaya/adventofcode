import { join } from "path";
import { readFileSync } from "fs";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8");
const INPUT_MOCK = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const ELVES_CALORIES = INPUT.trim().split("\n");
// Part Two
const THREE_MAIN_ELVES = 3;

const formatElfArray = (): Map<number, number> => {
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

const partTwo = (elvesMap: number[]): number => {
  let caloriesMainElves = 0;
  for (let i = 0; i < THREE_MAIN_ELVES; i++) {
    caloriesMainElves += elvesMap[i];
  }
  return caloriesMainElves;
};

export const calorieCounting = (): number => {
  // solution 🚧
  const elvesMap = formatElfArray();
  const elvesOrderAsc = [...elvesMap.values()].sort((a, b) => a - b).reverse();
  console.log(
    `La cantidad de calorias del elfo que mas tiene es: ${elvesOrderAsc[0]}`
  );
  const caloriesMainElves = partTwo(elvesOrderAsc);
  console.log(
    `La cantidad total de calorias de los 3 elfos que mas tienen es: ${caloriesMainElves}`
  );
  return elvesOrderAsc[0];
};

// Success Result 68467 ⭐️
// Success Result Part Two 203420 ⭐️ ⭐️
calorieCounting();
