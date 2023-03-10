import { join } from "path";
import { readFileSync } from "fs";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");
const INPUT_MOCK: string[] = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split("\n");

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

const mapDictionary = new Map(dictionary.map((letter, i) => [letter, i + 1]));

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
  let sumPriority = 0;
  INPUT.forEach((backpack) => {
    const letterMatch = evaluateMatches(backpack);
    sumPriority += mapDictionary.get(letterMatch)!;
  });
  return sumPriority;
};

// PART TWO

const AMOUNT_PER_GROUP = 3;

const partTwo = (): number => {
  let sumPriorityBadge = 0;
  const gp = groupsBackpacks();
  gp.map((group) => {
    const badge = matchBadge(group)!;
    sumPriorityBadge += mapDictionary.get(badge)!;
  });
  return sumPriorityBadge;
};

const matchBadge = (groupBackpacks: string[]): string | null => {
  if (groupBackpacks.length !== 3) return null;

  let badgeTMP: string = "";
  const backpackOne = groupBackpacks[0];
  const backpackTwo = groupBackpacks[1];
  const backpackThree = groupBackpacks[2];

  backpackOne.split("").forEach((letter) => {
    if (backpackTwo.includes(letter) && backpackThree.includes(letter)) {
      badgeTMP = letter;
    }
  });

  return badgeTMP;
};

const groupsBackpacks = (): string[][] => {
  let groupsTMP: string[] = [];
  const groups: string[][] = [];

  let counterGroup = 0;

  INPUT.forEach((backpack, i) => {
    groupsTMP.push(backpack);
    ++counterGroup;
    if (counterGroup === AMOUNT_PER_GROUP) {
      groups.push(groupsTMP);
      counterGroup = 0;
      groupsTMP = [];
    }
  });
  return groups;
};

// Success Result 7908 ⭐️
rucksackReorganization();

// Success Result 2838 ⭐️⭐️
partTwo()
