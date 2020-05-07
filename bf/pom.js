/*
+++
>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
<<.
>.
>.
*/
let ptr = 0;
const stor = new Array(30000);
stor[ptr] = 3;
ptr++;
stor[ptr] = 80;
ptr++;
stor[ptr] = 111;
ptr++;
stor[ptr] = 109;

ptr = 1;
process.stdout.write(String.fromCharCode(stor[ptr]));
ptr++;
process.stdout.write(String.fromCharCode(stor[ptr]));
ptr++;
process.stdout.write(String.fromCharCode(stor[ptr]));
