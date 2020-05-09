#! /usr/bin/env node
const fs = require('fs');

function readScript(path) {
    return fs.readFileSync(path);
}

function print(value) {
    const string = String.fromCharCode(value);
    process.stdout.write(string);
}

function interpret(chars) {
    const cells = new Uint8Array(30000).fill(0);
    let ptr = 0;

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char === "+") {
            cells[ptr]++;
        } else if (char === "-") {
            cells[ptr]--;
        } else if (char === ">") {
            ptr++;
        } else if (char === "<") {
            ptr--;
        } else if (char === "[") {
            if (cells[ptr] === 0) {
                for (let depth = 0;; i++) {
                    const char = chars[i];
                    if (char === "[") {
                        depth++;
                    }
                    else if (char === "]") {
                        depth--;
                        if (depth === 0) {
                            break;
                        }
                    }
                }
            }
        } else if (char === "]") {
            if (cells[ptr] > 0) {
                for (let depth = 0;; i--) {
                    const char = chars[i];
                    if (char === "]") {
                        depth++;
                    }
                    else if (char === "[") {
                        depth--;
                        if (depth === 0) {
                            break;
                        }
                    }
                }
            }
        } else if (char === ".") {
            print(cells[ptr]);
        } else if (char === ",") {

        }
    }
}

const scriptArg = process.argv[2];
const script = readScript(scriptArg);
interpret(script.toString('ascii'));
