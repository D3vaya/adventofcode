import { join } from "path";
import { readFileSync } from "fs";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8");
const INPUT_MOCK: string = `A Y
B X
C Z`;

const ARRAY_OF_PLAYS = INPUT.trim().split("\n");

const SCORE = new Map<string, number>();
SCORE.set("A", 1); // ROCK
SCORE.set("B", 2); // PAPER
SCORE.set("C", 3); // SCISSORS

const SCORE_RESULTS = new Map<string, number>();
SCORE_RESULTS.set("WIN", 6);
SCORE_RESULTS.set("LOSE", 0);
SCORE_RESULTS.set("DRAW", 3);

const STRATEGY_GUIDE = new Map<string, string>();
STRATEGY_GUIDE.set("X", "A");
STRATEGY_GUIDE.set("Y", "B");
STRATEGY_GUIDE.set("Z", "C");

const RESULTS = new Map<string, string>();
RESULTS.set("AA", "DRAW");
RESULTS.set("AB", "WIN");
RESULTS.set("AC", "LOSE");
RESULTS.set("BA", "LOSE");
RESULTS.set("BB", "DRAW");
RESULTS.set("BC", "WIN");
RESULTS.set("CA", "WIN");
RESULTS.set("CB", "LOSE");
RESULTS.set("CC", "DRAW");

// Part Two
const STRATEGY_RESULTS_PART_TWO_X = new Map<string, string>();
STRATEGY_RESULTS_PART_TWO_X.set("A", "C");
STRATEGY_RESULTS_PART_TWO_X.set("B", "A");
STRATEGY_RESULTS_PART_TWO_X.set("C", "B");

const STRATEGY_PART_TWO_Z = new Map<string, string>();
STRATEGY_PART_TWO_Z.set("A", "B");
STRATEGY_PART_TWO_Z.set("B", "C");
STRATEGY_PART_TWO_Z.set("C", "A");

const STRATEGY_GUIDE_PT = new Map<string, (o: string) => string>();

STRATEGY_GUIDE_PT.set("X", (m: string) => STRATEGY_RESULTS_PART_TWO_X.get(m)!);
STRATEGY_GUIDE_PT.set("Y", (m: string) => m);
STRATEGY_GUIDE_PT.set("Z", (m: string) => STRATEGY_PART_TWO_Z.get(m)!);

export const rockPaperScissor = (): number => {
  // solution 🚧
  let roundPoints = 0;
  let roundPointsPartTwo = 0;
  ARRAY_OF_PLAYS.forEach((strategyArray) => {
    const [opponentPlay, strategy] = strategyArray.split(" ");

    const strategyMove = STRATEGY_GUIDE.get(strategy)!;
    const pointsStrategy = SCORE.get(STRATEGY_GUIDE.get(strategy)!)!;

    const playResult = RESULTS.get(opponentPlay + strategyMove)!;
    const pointsResult = SCORE_RESULTS.get(playResult)!;

    roundPoints += pointsResult + pointsStrategy;
    roundPointsPartTwo += partTwo(opponentPlay, strategy);
  });
  console.log('[LOG] 🚧 PART TWO', roundPointsPartTwo)
  return roundPoints;
};

const partTwo = (opponentPlay: string, strategy: string): number => {
  let roundPoints = 0;

  const newStrategy = STRATEGY_GUIDE_PT.get(strategy)!(opponentPlay);
  const pointsStrategy = SCORE.get(newStrategy)!;

  const playResult = RESULTS.get(opponentPlay + newStrategy)!;
  const pointsResult = SCORE_RESULTS.get(playResult)!;

  roundPoints += pointsResult + pointsStrategy;

  return roundPoints;
};

// Success Result 12855 ⭐️
// Success Result Part Tow 12855 ⭐️⭐️

console.log("[LOG] 🚧 PART ONE", rockPaperScissor());
