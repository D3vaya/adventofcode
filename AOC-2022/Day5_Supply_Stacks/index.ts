import { join } from "path";
import { readFileSync } from "fs";
import { BoxStack } from "./stack";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

const INPUT_MOCK = `1,2,1
3,1,3
2,2,1
1,1,2`.split("\n");

const mapStack = new Map<string, BoxStack>();

// stacks examples
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

const stack1 = new BoxStack(["Z", "T", "F", "R", "W", "J", "G"]);
const stack2 = new BoxStack(["G", "W", "M"]);
const stack3 = new BoxStack(["J", "N", "H", "G"]);

// stacks challenge
//                 [M]     [V]     [L]
// [G]             [V] [C] [G]     [D]
// [J]             [Q] [W] [Z] [C] [J]
// [W]         [W] [G] [V] [D] [G] [C]
// [R]     [G] [N] [B] [D] [C] [M] [W]
// [F] [M] [H] [C] [S] [T] [N] [N] [N]
// [T] [W] [N] [R] [F] [R] [B] [J] [P]
// [Z] [G] [J] [J] [W] [S] [H] [S] [G]
//  1   2   3   4   5   6   7   8   9
const stack4 = new BoxStack(["J", "R", "C", "N", "W"]);
const stack5 = new BoxStack(["W", "F", "S", "B", "G", "Q", "V", "M"]);
const stack6 = new BoxStack(["S", "R", "T", "D", "V", "W", "C"]);
const stack7 = new BoxStack(["H", "B", "N", "C", "D", "Z", "G", "V"]);
const stack8 = new BoxStack(["S", "J", "N", "M", "G", "C"]);
const stack9 = new BoxStack(["G", "P", "N", "W", "C", "J", "D", "L"]);

const loadBoxPositionExample = () => {
  mapStack.set('1', stack1);
  mapStack.set('2', stack2);
  mapStack.set('3', stack3);
};

const loadBoxPositionChallenge = () => {
  mapStack.set('1', stack1);
  mapStack.set('2', stack2);
  mapStack.set('3', stack3);
  mapStack.set('4', stack4);
  mapStack.set('5', stack5);
  mapStack.set('6', stack6);
  mapStack.set('7', stack7);
  mapStack.set('8', stack8);
  mapStack.set('9', stack9);
};

const extractCurrentValues = () => {
  let positionTopBoxes = "";
  mapStack.forEach((stack) => {
    positionTopBoxes += stack.top?.value;
  });
  return positionTopBoxes;
};

export const supplyStacks = (): string => {
  loadBoxPositionChallenge();
  INPUT.forEach((procedure) => {
    const [units, sourceStack, targetStack] = procedure.split(",");
    const sourceStackSelected = mapStack.get(sourceStack)!;
    const targetStackSelected = mapStack.get(targetStack)!;
    // procedures
    //move 1 from 2 to 1
    //mover una(1) caja de pila 2 a pila 1
    for (let i = 1; i <= Number(units); i++) {
      targetStackSelected.push(sourceStackSelected.top?.value!);
      sourceStackSelected.remove();
    }
  });

  return extractCurrentValues();
};
// Success Result Mock Example -> CMZ
// Success Result Input -> CWMTGHBDW
console.log(supplyStacks());
