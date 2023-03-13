import { join } from "path";
import { readFileSync } from "fs";
const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

const INPUT_MOCK = `bvwbjplbgvbhsrlpgdmjqwftvncz
nppdvjthqldpwncqszvftbrmjlhg
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`.split("\n");

const INPUT_MOCK_EXAMPLE = `mjqjpqmgbljsphdztnvjfqwrcgsmlb
bvwbjplbgvbhsrlpgdmjqwftvncz
nppdvjthqldpwncqszvftbrmjlhg
nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg
zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`.split("\n");

const tuningTrouble = (input: string, maxCounter: number) => {
  let letter = "";
  let pointerCounter = 0;

  for (let i = 0; i <= input.length - 1; i++) {
    if (!letter.includes(input[i])) {
      letter += input[i];
      ++pointerCounter;
      if (letter.length === maxCounter) {
        return pointerCounter;
      }
    } else {
      const index = letter.indexOf(input[i]);
      letter = letter.slice(index, letter.length);
      letter += input[i];
      letter = letter.slice(1, letter.length);

      ++pointerCounter;
    }
  }
};

// Success Result 1647 ⭐️
// INPUT.forEach((input) => {
//   console.log("[LOG] ⭐️ ", tuningTrouble(input));
// });

INPUT_MOCK_EXAMPLE.forEach((input) => {
  console.log("[LOG] ⭐️ ", tuningTrouble(input, 4));
});

INPUT_MOCK_EXAMPLE.forEach((input) => {
  console.log("[LOG] ⭐️ ", tuningTrouble(input, 14));
});
