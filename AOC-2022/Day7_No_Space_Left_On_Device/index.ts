import { join } from "path";
import { readFileSync } from "fs";
import { BinarySearchTree } from "./trees";

const INPUT = readFileSync(join(__dirname, "input.txt"), "utf8").split("\n");

const INPUT_MOCK = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

export const noSpaceLeftOnDevice = () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(15);
  tree.insert(8);
  tree.insert(20);
  console.log('[LOG] 🚧 ', tree)  
};

console.log(noSpaceLeftOnDevice())
