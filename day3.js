import getInput from "./utils/index.js";

const getMostUsedBit = (array, index) => {
  let count = 0;

  array.forEach((a) => {
    if (a[index] == undefined) {
    } else {
      count += parseInt(a[index]);
    }
  });

  return array.length / 2 <= count ? "1" : "0";
};

const getLeastUsedBit = (array, index) => {
  let count = 0;

  array.forEach((a) => {
    if (a[index] == undefined) {
    } else {
      count += parseInt(a[index]);
    }
  });

  return array.length / 2 > count ? "1" : "0";
};

const filterArray = (array, index, bit) => {
  return array.filter((x) => x[index] === bit);
};
const run = async () => {
  const bitts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const input = await getInput(3);
  const inputLines = input.split("\n");
  console.log(inputLines.length);
  inputLines.forEach((z) => {
    for (let index = 0; index < z.length; index++) {
      bitts[index] += parseInt(z[index]);
    }
  });
  console.log(bitts);
  let a = "";
  let b = "";
  bitts.forEach((bc, index) => {
    if (inputLines.length / 2 > bc) {
      a += "0";
      b += "1";
    } else {
      a += "1";
      b += "0";
    }
  });
  console.log("a", a);
  console.log("b", b);
  console.log(
    a,
    b,
    parseInt(a, 2),
    parseInt(b, 2),
    parseInt(a, 2) * parseInt(b, 2)
  );
};

const run2 = async () => {
  const input = await getInput(3);
  let inputLines = input.split("\n");

  for (let index = 0; index < 12; index++) {
    //console.log(index);
    const x = getMostUsedBit(inputLines, index);

    if (inputLines.length > 1) {
      inputLines = filterArray(inputLines, index, x);
    }
  }

  console.log(inputLines);
  console.log(parseInt(inputLines[0], 2)); // 2522
};

// const demoo = ["00100", "11110", "10110"];
// console.log(getMostUsedBit(demoo, 0));
// console.log(filterArray(demoo, 1, "0"));
run2();
