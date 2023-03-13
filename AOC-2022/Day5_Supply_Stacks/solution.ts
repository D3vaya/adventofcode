import { BoxStack } from "./stack";
import { BoxQueue } from "./queue";

export class SupplyStacks {
  result: string;
  input: string[];
  developing: boolean;
  mapStack: Map<string, BoxStack>;

  constructor(input: string[], developing = true) {
    this.result = "";
    this.input = input;
    this.developing = developing;
    this.mapStack = new Map<string, BoxStack>();
  }

  private loadStacks(): void {
    this.mapStack.set("1", new BoxStack(["Z", "T", "F", "R", "W", "J", "G"]));
    this.mapStack.set("2", new BoxStack(["G", "W", "M"]));
    this.mapStack.set("3", new BoxStack(["J", "N", "H", "G"]));
    this.mapStack.set("4", new BoxStack(["J", "R", "C", "N", "W"]));
    this.mapStack.set(
      "5",
      new BoxStack(["W", "F", "S", "B", "G", "Q", "V", "M"])
    );
    this.mapStack.set("6", new BoxStack(["S", "R", "T", "D", "V", "W", "C"]));
    this.mapStack.set(
      "7",
      new BoxStack(["H", "B", "N", "C", "D", "Z", "G", "V"])
    );
    this.mapStack.set("8", new BoxStack(["S", "J", "N", "M", "G", "C"]));
    this.mapStack.set(
      "9",
      new BoxStack(["G", "P", "N", "W", "C", "J", "D", "L"])
    );
  }

  private loadStacksExmaple(): void {
    this.mapStack.set("1", new BoxStack(["Z", "N"]));
    this.mapStack.set("2", new BoxStack(["M", "C", "D"]));
    this.mapStack.set("3", new BoxStack(["P"]));
  }

  printResult(): string {
    let result = "";
    this.mapStack.forEach((stack) => {
      result += stack.top?.value;
    });
    return result;
  }

  main = () => {
    if (!this.developing) {
      this.loadStacks();
    } else {
      this.loadStacksExmaple();
    }
    this.input.forEach((procedure) => {
      const [units, sourceStack, targetStack] = procedure.split(",");
      const sourceStackSelected = this.mapStack.get(sourceStack)!;
      const targetStackSelected = this.mapStack.get(targetStack)!;
      for (let i = 1; i <= Number(units); i++) {
        targetStackSelected.push(sourceStackSelected.top?.value!);
        sourceStackSelected.remove();
      }
    });
  };
}

export class SupplyStacksPartTwo {
  input: string[];
  developing: boolean;
  mapQueue: Map<string, BoxQueue>;

  constructor(input: string[], developing = true) {
    this.mapQueue = new Map<string, BoxQueue>();
    this.input = input;
    this.developing = developing;
  }

  private loadQueuesExmple() {
    this.mapQueue.set("1", new BoxQueue(["N", "Z"]));
    this.mapQueue.set("2", new BoxQueue(["D", "C", "M"]));
    this.mapQueue.set("3", new BoxQueue(["P"]));
  }

  private loadQueues() {
    this.mapQueue.set("1", new BoxQueue(["G", "J", "W", "R", "F", "T", "Z"]));
    this.mapQueue.set("2", new BoxQueue(["M", "W", "G"]));
    this.mapQueue.set("3", new BoxQueue(["G", "H", "N", "J"]));
    this.mapQueue.set("4", new BoxQueue(["W", "N", "C", "R", "J"]));
    this.mapQueue.set(
      "5",
      new BoxQueue(["M", "V", "Q", "G", "B", "S", "F", "W"])
    );
    this.mapQueue.set("6", new BoxQueue(["C", "W", "V", "D", "T", "R", "S"]));
    this.mapQueue.set(
      "7",
      new BoxQueue(["V", "G", "Z", "D", "C", "N", "B", "H"])
    );
    this.mapQueue.set("8", new BoxQueue(["C", "G", "M", "N", "J", "S"]));
    this.mapQueue.set(
      "9",
      new BoxQueue(["L", "D", "J", "C", "W", "N", "P", "G"])
    );
  }

  printResult(): string {
    let positionTopBoxes = "";
    this.mapQueue.forEach((stack) => {
      positionTopBoxes += stack.first?.value;
    });
    return positionTopBoxes;
  }

  main = () => {
    if (this.developing) {
      this.loadQueuesExmple();
    } else {
      this.loadQueues();
    }
    this.input.forEach((procedure, i) => {
      const [units, sourceQueue, targetQueue] = procedure.split(",");

      const sourceQueueSelected = this.mapQueue.get(sourceQueue)!;
      const targetQueueSelected = this.mapQueue.get(targetQueue)!;
      // procedures
      //move 1 from 2 to 1
      //mover una(1) caja de pila 2 a pila 1
      const u = Number(units);
      for (let i = 1; i <= u; i++) {
        
        if (units === "1") {
          targetQueueSelected.push(sourceQueueSelected.first?.value!)
          sourceQueueSelected.deQueue();
        } else {
          targetQueueSelected.enQueue(sourceQueueSelected.first?.value!);
          sourceQueueSelected.deQueue();
        }
      }
    });
  };
}


//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
const q1  = new BoxQueue(['N','Z'])
const q2  = new BoxQueue(["D", "C", "M"]);
const q3  = new BoxQueue(['P'])

q1.push(q2.first!.value);
q2.deQueue()
// [D]
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
//console.log('[LOG] 🚧 1', q1,q2,q3)


q3.push(q1.first!.value)
q1.deQueue()
// [N] [C] [D]
// [Z] [M] [P]
//  1   2   3 
//console.log('[LOG] 🚧 2', q1,q2,q3)
//console.log('[LOG] 🚧 1', q3)

q3.enQueue(q1.first!.value)
q1.deQueue()
//        [D]
//    [C] [N]
//[Z] [M] [P]
// 1   2   3
console.log('[LOG] 🚧 2', q3)
q3.enQueue(q1.first!.value)
//console.log('[LOG] 🚧 3', q3)
q1.deQueue()
//        [D]
//        [N]
//    [C] [Z]
//    [M] [P]
// 1   2   3
console.log('[LOG] 🚧 3',q3)

