import { join } from "path";
import { readFileSync } from "fs";

const input = readFileSync(join(__dirname, "input.txt"), "utf8");
// const inputMock: string = `A Y
// B X
// C Z`;

const arrayHelp = input.trim().split("\n");

const SCORE = new Map<string, number>();
SCORE.set("A", 1); // STONE
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

export const rockPaperScissor = (): number => {
  // solution 🚧
  let roundPoints = 0;
  arrayHelp.forEach((strategyArray) => {
    const [opponentPlay, strategy] = strategyArray.split(" ");

    const strategyMove = STRATEGY_GUIDE.get(strategy)!;
    const pointsStrategy = SCORE.get(STRATEGY_GUIDE.get(strategy)!)!;

    const playResult = RESULTS.get(opponentPlay + strategyMove)!;
    const pointsResult = SCORE_RESULTS.get(playResult)!;

    roundPoints += pointsResult + pointsStrategy;
  });
  return roundPoints;
};
// Success Result 12855 ⭐️
console.log("[LOG] 🚧 ", rockPaperScissor());
rockPaperScissor();
