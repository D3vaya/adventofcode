// 41.171
const elfOne = [2991, 13880, 13279, 1514, 9507];
// 49.371
const elfTwo = [6544, 9672, 13044, 4794, 6648, 8669];
// 33.390
const elfThree = [2790, 1196, 3619, 1692, 8727, 2342, 1099, 6083, 3834, 2008];
// 46.337
const elfFour = [
  2974, 4393, 1146, 4240, 1880, 3226, 2390, 5640, 2768, 1887, 4217, 3314, 5653,
  2609,
];
// 62.380
const elfFive = [
  4473, 7306, 7909, 6862, 7413, 3738, 2102, 4269, 5966, 7491, 4851,
];

const elves = [elfOne, elfTwo, elfThree, elfFour, elfFive];
let maxCalories = 0;

export const solution = () => {
  let elfSelected:string = '';
  // solution here 👇
  for (let i = 0; i < elves.length; i++) {
    const totalCalories = elves[i].reduce((sum, num) => sum + num);
    if (totalCalories > maxCalories) {
      maxCalories = totalCalories;
      elfSelected = `elfo Nº ${i + 1}`;
    }
  }
  console.log(`el elfo que mas calorias tiene es el ${elfSelected}`);
  console.log(maxCalories);
  return maxCalories;
};

solution();
