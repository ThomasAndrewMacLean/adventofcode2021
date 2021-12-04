import getInput from "./utils/index.js";

let depth = 0;
let forward = 0;
let aim = 0;
const run = async () => {
  const input = await getInput(2);

  input.split("\n").forEach((z) => {
    const [direction, amount] = z.split(" ");
    switch (direction) {
      case "up":
       // depth -= parseInt(amount);
        aim -= parseInt(amount);

        break;
      case "down":
        //depth += parseInt(amount);
        aim += parseInt(amount);
        break;
      case "forward":
        forward += parseInt(amount);
        depth += parseInt(amount) * aim;
        break;
      default:
        break;
    }
  });
  console.log(depth, forward, depth * forward);
};

run();
