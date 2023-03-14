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

interface Folder {
  name: string;
  folders: Folder[];
  folderSize: number;
  files: FileFolder[];
  folderParent: Folder | null;
}
interface FileFolder {
  fileName: string;
  fileWeight: number;
}

interface CMD {
  command: string;
  terminal: Terminal;

  execute: () => void;
}

// COMMANDS

class DirCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): void {
    const [cmd, nameFolder] = this.command.split(" ");
    const newFolder: Folder = {
      name: nameFolder,
      files: [],
      folders: [],
      folderSize: 0,
      folderParent: this.terminal.sessionTerminal,
    };
    this.terminal.sessionTerminal.folders.push(newFolder);
    this.terminal.tree.folders.push(newFolder);
  }
}

class CreateFileCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    //console.log('[LOG] 🚧 ', {cmd})
    this.command = cmd;
    this.terminal = t;
  }

  execute(): void {
    const [fileWeight, fileName] = this.command.split(" ");
    const newFile: FileFolder = {
      fileName,
      fileWeight: Number(fileWeight),
    };
    this.terminal.sessionTerminal.folderSize += newFile.fileWeight;
    this.summation(this.terminal.sessionTerminal, newFile.fileWeight);
    // if (this.terminal.sessionTerminal.folderParent) {
    //   this.terminal.sessionTerminal.folderParent.folderSize +=
    //     newFile.fileWeight;
    // }
    this.terminal.sessionTerminal.files.push(newFile);
    this.terminal.tree.files.push(newFile);
  }

  summation(folder: Folder, fileWeight: number) {
    if (folder.folderParent) {
      folder.folderParent.folderSize += fileWeight;
      this.summation(folder.folderParent, fileWeight);
    }
  }
}

class LsCommand implements CMD {
  command: string;
  terminal: Terminal;
  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  execute(): void {
    //this.terminal.printSession();
  }
}

class CdCommand implements CMD {
  command: string;
  terminal: Terminal;

  constructor(cmd: string, t: Terminal) {
    this.command = cmd;
    this.terminal = t;
  }

  private isReturn(cmd: string): boolean {
    if (cmd === "..") return true;
    return false;
  }

  execute(): void {
    const [symbol, cmd, path] = this.command.split(" ");

    const isBack = this.isReturn(path);
    let directory: Folder;
    if (isBack) {
      directory = this.terminal.sessionTerminal.folderParent!;
    } else {
      this.terminal.backupDir = this.terminal.sessionTerminal;
      directory = this.terminal.sessionTerminal.folders.find(
        (f) => f.name === path
      )!;
    }

    this.terminal.sessionTerminal = directory;
  }
}

class Terminal {
  // tree: Tree;
  tree: Folder;
  backupDir: Folder;
  sessionTerminal: Folder;
  rootDirTmp: Folder;
  private mapCommands: Map<string, CMD> = new Map();
  private arrayCommands: string[] = [];

  constructor(cmds: string[]) {
    if (!cmds) throw `${cmds} undefined`;
    if (cmds.length === 0) throw `${cmds} empty`;
    this.arrayCommands = cmds;

    this.sessionTerminal = {
      name: "root",
      folders: [
        {
          name: "/",
          files: [],
          folders: [],
          folderSize: 0,
          folderParent: null,
        },
      ],
      folderSize: 0,
      files: [],
      folderParent: null,
    };
    //this.tree = this.sessionTerminal;
    this.tree = {
      name: "/",
      files: [],
      folders: [],
      folderSize: 0,
      folderParent: null,
    };
    this.rootDirTmp = this.tree;
    this.backupDir = this.sessionTerminal;
  }

  runCommands(): void {
    this.arrayCommands.forEach((command) => {
      const cmdArray = command.split(" ");
      if (cmdArray.length === 3) {
        const Command = new CdCommand(command, this);
        Command?.execute();
        return;
      } else {
        if (cmdArray.length === 2) {
          const [cmd, name] = cmdArray;
          if (cmd === "dir") {
            const Command = new DirCommand(command, this);
            Command?.execute();
          }
          if (name === "ls") {
            const Command = new LsCommand(command, this);
            Command?.execute();
          }
          if (cmd !== "dir" && name !== "ls") {
            const Command = new CreateFileCommand(command, this);
            Command?.execute();
          }
        }
      }
    });
  }

  calculateDirectorySize(counter: number, folder: Folder) {
    if (folder.folders.length > 0) {
      folder.folders.forEach((f) => {
        counter += f.folderSize;
        return this.calculateDirectorySize(counter, f);
      });
    } else {
      counter += folder.folderSize;
    }
    return counter;
  }

  printSession() {
    console.table(this.tree);
  }

  findIdealSize() {
    let tmp = 0;
    this.tree.folders.forEach((f) => {
      tmp += f.folderSize;
    });
    // const r = this.tree.folders
    //   .filter((f) => f.folderSize <= 100000)
    //   .sort((a, b) => a.folderSize + b.folderSize);
    // return r[0].folderSize;
  }

  sum(tree: Folder, count: number, counter: number, tmp: number) {
    const arr: number[] = [];
    tree.folders.forEach(f => {
      let t = 0;
      //console.log('[LOG] 🚧 ', {f})
      const len = tree.folders.length;

      for (let i = 0; i <= len; i++) {
        if (typeof f.folders[i]?.folderSize !== "undefined") {
          t += (f.folderSize + f.folders[i]?.folderSize);
          console.log('[LOG] 🚧 ', {t})
          if (t <= 100000) {
            tmp = t;
            arr.push(tmp);
          }
          // } else {
          //   t = 0;
          //   arr.push(tmp);
          // }
        }
      }
    })
    //if (tree.folders !== null) {
      
      // tree.folders.forEach((f, i) => {
      //   counter++;
      //   count += f.folderSize;
      //   tmp = count;
      //   if (counter % 2 === 0) {
      //     if (count <= 100000) {
      //       tmp = count;
      //     } else {

      //       return tmp;
      //     }
      //   }

      //   this.sum(f, count, counter, tmp);
      // });
    //}

    return arr;
  }
}

const M = `$ cd /
$ ls

dir b
$ cd b
9800 script.ts
10500 example.html
$ cd ..
14848514 b.txt
dir a
$ cd a
$ ls
12345 type.ts
22345 type.js
dir __test__
$ ls
$ cd __test__
48514 hola-mundo.txt
$ ls
$ cd ..
$ ls
$ cd ..
`.split("\n");

const terminal = new Terminal(INPUT);
terminal.runCommands();
console.log("[LOG] 🚧 sum", terminal.sum(terminal.tree, 0, 0, 0));
console.log("[LOG] 🚧 ", terminal.findIdealSize());

// console.log(
//   "COUNTER",
//   terminal.calculateDirectorySize(0, terminal.sessionTerminal)
// );
//terminal.printSession();
