/* let triangle = "";

for (let i = 0; i <= 7; i++) {
    triangle += "#"
    console.log(triangle.length);
} */


        /* for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        } */

            /* for (let i = 1; i <= 100; i++) {
                let output = "";
                if (i % 3 === 0) output += "Fizz";
                if (i % 5 === 0) output += "Buzz";
                console.log(output || i);
            } */


let size = 20;
let board = "";
for (let x = 0; x <= size; x++) {
    for (let y = 0; y <= size; y++) {
        board += (x + y) % 2 === 0 ? " " : "#";
    }
    board += "\n";
}

console.log(board);
