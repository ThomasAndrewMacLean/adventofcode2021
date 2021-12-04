import fetch from "node-fetch";
const getInput = async (day) => {
  const request = await fetch(
    "https://adventofcode.com/2021/day/" + day + "/input",
    {
      headers: {
        cookie:
          "session=53616c7465645f5ffb3e8c2044f5d8be5ee6ea78478dbda022bb2e9efc5980d8d45c63e46c86cf1f31dacece658cabdc; Max-Age=0",
      },
      credentials: "include",
    }
  );

  const data = await request.text();
  return data;
};

export default getInput;
