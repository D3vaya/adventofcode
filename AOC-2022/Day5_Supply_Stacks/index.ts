import { join } from "path";
import { readFileSync } from "fs";
import { SupplyStacks, SupplyStacksPartTwo } from "./solution";


const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

const INPUT_MOCK = `1,2,1
3,1,3
2,2,1
1,1,2`.split("\n");

const supplyStacks = new SupplyStacks(INPUT_MOCK);

//supplyStacks.main();
//console.log('[LOG] 🚧 ', supplyStacks.printResult())


//const sQ = new SupplyStacksPartTwo(INPUT_MOCK);
// console.log('[LOG] 🚧 ', sQ.mapQueue)
// console.log('[LOG] 🚧 ', sQ.printResult())
