const fs = require("fs");
const { readdirSync } = require("fs");

const files = readdirSync("./collection/final-jsons");

let i = 1;

files.forEach((jsonFile) => {
  let file = fs.readFileSync(`./collection/final-jsons/${jsonFile}`);
  file = JSON.parse(file);

  let metadataEdition = parseInt(jsonFile.replace(".json", ""));

  file.name = `The Drunken Monster Maven Club #${metadataEdition}`;
  file.image = `ipfs://QmXkmAh9SJNvo4LXb2MXBZ37px5vrsaH3kqpGdokEa3zbS/${metadataEdition}.png`;
  file.edition = metadataEdition;

  fs.writeFileSync(
    `./collection/final-updated-jsons/${metadataEdition}.json`,
    JSON.stringify(file, null, 2)
  );

  console.log(`NFT: ${i}`);
  i++;
});
