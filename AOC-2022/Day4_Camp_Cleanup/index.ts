import { join } from "path";
import { readFileSync } from "fs";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n");

const INPUT_MOCK: string[] = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split("\n");

const inRange = (range1: string[], range2: string[]) => {
  // 2 - 4, 6 - 8;
  // 2 - 3, 4 - 5;
  // 5 - 7, 7 - 9;
  // 2 - 8, 3 - 7; X
  // 6 - 6, 4 - 6; X
  // 2 - 6, 4 - 8;
  let c = 0;

  const ran1 = range1.sort((a, b) => Number(a) + Number(b));
  const ran2 = range2.sort((a, b) => Number(a) + Number(b));
  let ranIterate: string[] = [];
  let ranEvaluate: string[] = [];
  const numR1_0 = Number(ran1[0]);
  const numR2_0 = Number(ran2[0]);

  const numR1_1 = Number(ran1[1]);
  const numR2_1 = Number(ran2[1]);

  if (numR1_0 <= numR2_0) {
    if(numR1_1 <= numR2_1){
      c++
    }
  }

  //console.log('[LOG] 🚧 ', {ranEvaluate})
  console.log("[LOG] 🚧 ", { ran1, ran2 });
  console.log("---------");
  //console.log('[LOG] 🚧 ', numR2_0,'>=',numR1_0,'&&',numR2_1,'<=',numR1_0, (numR2_0 >= numR1_0 &&  numR2_1 <= numR1_1))

  // console.log('[LOG] 🚧 ', {ranEvaluate})
  // console.log('[LOG] 🚧 ', {ranIterate})

  return c;
};

export const campCleanup = () => {
  const sectionsId = INPUT.map((p) => p.split(","));

  let counter = 0;
  sectionsId.forEach(([firstElfSection, secondElfSection]) => {
    const firstSection = firstElfSection.split("-");

    const secondSection = secondElfSection.split("-");
    counter += inRange(firstSection, secondSection);
    let firstSectionTMP = "";
    for (let i = Number(firstSection[0]); i <= Number(firstSection[1]); i++) {
      firstSectionTMP += [i];
    }

    let secondSectionTMP = "";
    for (let i = Number(secondSection[0]); i <= Number(secondSection[1]); i++) {
      secondSectionTMP += [i];
    }

    if (firstSectionTMP.length > secondSectionTMP.length) {
      // console.log("[LOG] 🚧 first", {
      //   firstSection,
      //   firstSectionTMP,
      //   secondSection,
      //   secondSectionTMP,
      //   second: secondSectionTMP.length,
      //   first: firstSectionTMP.length,
      //   includes: firstSectionTMP.includes(secondSectionTMP),
      // });
      if (firstSectionTMP.includes(secondSectionTMP)) {
        //counter++;
      }
    } else {
      // console.log("[LOG] 🚧 second", {
      //   firstSection,
      //   firstSectionTMP,
      //   secondSection,
      //   secondSectionTMP,
      //   second: secondSectionTMP.length,
      //   first: firstSectionTMP.length,
      //   includes: secondSectionTMP.includes(firstSectionTMP),
      // });
      if (secondSectionTMP.includes(firstSectionTMP)) {
        //counter++;
      }
    }
  });
  return counter;
};

console.log("[LOG] 🚧 Result", campCleanup());
