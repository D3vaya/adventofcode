import { join } from "path";
import { readFileSync } from "fs";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8");
const INPUT_MOCK: string = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const lettersUpperCase = LETTERS.map((l) => l.toLocaleUpperCase());
const dictionary = LETTERS.concat(lettersUpperCase);

const mapDictionary = new Map(dictionary.map((letter, i) => [letter, i+1]));

const evaluateMatches = (backpack: string): string => {
  const compartmentA = backpack.slice(0, backpack.length / 2);
  const compartmentB = backpack.slice(backpack.length / 2, backpack.length);
  let letterMatch = "";

  compartmentA.split("").forEach((letter) => {
    if (compartmentB.includes(letter)) letterMatch = letter;
  });

  return letterMatch;
};

export const rucksackReorganization = () => {
  const arrayBackpack = INPUT.split("\n");
  let sumPriority = 0;
  arrayBackpack.forEach((backpack) => {
    const letterMatch = evaluateMatches(backpack);
    sumPriority += mapDictionary.get(letterMatch)!;
  });
  return sumPriority;
};

// Success Result 7908 ⭐️
rucksackReorganization();
