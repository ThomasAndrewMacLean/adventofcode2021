import fetch from "node-fetch";

let count = -1;
fetch("https://adventofcode.com/2021/day/1/input", {
  headers: {
    cookie:
      "session=53616c7465645f5ffb3e8c2044f5d8be5ee6ea78478dbda022bb2e9efc5980d8d45c63e46c86cf1f31dacece658cabdc; Max-Age=0",
  },
  credentials: "include",
})
  .then((res) => res.text())
  .then((input) => {
    const demo = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    let last = 0;
    const inputLines = input.split("\n");
    for (let index = 0; index < inputLines.length; index++) {
      if (
        parseInt(inputLines[index]) &&
        parseInt(inputLines[index + 1]) &&
        parseInt(inputLines[index + 2])
      ) {
        let window =
          parseInt(inputLines[index]) +
          parseInt(inputLines[index + 1]) +
          parseInt(inputLines[index + 2]);
        console.log(window);
        if (window > last) {
          count++;
        }
        last = window;
      }
    }

    console.log(count);
  });
