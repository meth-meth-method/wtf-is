#! /usr/bin/env node
const fs = require('fs');

function readScript(path) {
    return fs.readFileSync(path);
}

function debug(...args) {
    console.debug(...args);
}

function print(value) {
    const string = String.fromCharCode(value);
    process.stdout.write(string);
}

const scriptArg = process.argv[2];
const script = readScript(scriptArg);

const cells = new Array(30).fill(0);
let ptr = 0;

const chars = script.toString('ascii');
const loopIndices = [];
for (let i = 0; i < chars.length; i++) {
    debug('Char: %d', i);
    const char = chars[i];
    if (char === "+") {
        cells[ptr]++;
        debug("Ptr [%d]: %d", ptr, cells[ptr]);
    } else if (char === "-") {
        cells[ptr]--;
        debug("Ptr [%d]: %d", ptr, cells[ptr]);
    } else if (char === ">") {
        ptr++;
        debug('Pointer: %d', ptr);
        if (ptr > cells.length - 1) {
            const context = chars.slice(i, i + 100);
            throw new RangeError(`Pointer above max @ ${i}: ${context}`);
        }
    } else if (char === "<") {
        ptr--;
        debug('Pointer: %d', ptr);
        if (ptr < 0) {
            const context = chars.slice(i, i + 100);
            throw new RangeError(`Pointer below 0 @ ${i}: ${context}`);
        }
    } else if (char === "[") {
        if (cells[ptr] === 0) {
            for (let depth = 0;; i++) {
                const char = chars[i];
                if (char === "[") {
                    depth++;
                    debug("Increasing depth to %d", depth);
                }
                else if (char === "]") {
                    depth--;
                    debug("Decreasing depth to %d", depth);

                    if (depth === 0) {
                        debug("Found matching brace @ %d", i);
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
                    debug("Increasing depth to %d", depth);
                }
                else if (char === "[") {
                    depth--;
                    debug("Decreasing depth to %d", depth);

                    if (depth === 0) {
                        debug("Found matching brace @ %d", i);
                        break;
                    }
                }
            }
        }
    } else if (char === ".") {
        print(cells[ptr]);
    }
}
