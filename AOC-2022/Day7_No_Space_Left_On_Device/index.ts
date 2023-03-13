import { join } from "path";
import { readFileSync } from "fs";
import { Tree } from "./trees";

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
7214296 k`.split("\n");

const COMMANDS = {
  "$ cd": "",
  dir: "",
  ls: "",
};
const CMD_CD = "$";
const CMD_DIR = "dir";

interface CMD {
  command: string;
  terminal: Terminal;
  execute: () => boolean;
}

// COMMANDS

class DirCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): boolean {
    return false;
  }
}

class CreateFileCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): boolean {
    return false;
  }
}
class LsCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): boolean {
    return false;
  }
}
class CdCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): boolean {
    console.log('- / (Dir)')
    this.terminal.tree.insert(1)
    console.log("[LOG] 🚧 TREE", this.terminal.tree);
    return false;
  }
}

class Terminal {
  tree: Tree;
  arrayCommands: CMD[] = [];
  commands: Map<string, CMD> = new Map();

  constructor(cmds: string[]) {
    if (!cmds) throw `${cmds} undefined`;
    if (cmds.length === 0) throw `${cmds} empty`;
    this.tree = new Tree();
    cmds.forEach((command) => {});
  }

  exe() {
    const c = new CdCommand("$ cd /", this);
    c.execute();
  }
}


const t = new Terminal(['$ cd /'])
t.exe()