// PATH -> Where your files are stored
// NEW-PATH -> Where you want to save the updated files

const fs = require("fs");
const { readdirSync } = require("fs");

const files = readdirSync("./PATH");

let i = 1;

files.forEach((jsonFile) => {
  let file = fs.readFileSync(`./PATH/${jsonFile}`);
  file = JSON.parse(file);

  let metadataEdition = parseInt(jsonFile.replace(".json", ""));

  file.name = `Collection Name #${metadataEdition}`;
  file.image = `ipfs://CID/${metadataEdition}.png`;
  file.edition = metadataEdition;

  fs.writeFileSync(
    `./NEW-PATH/${metadataEdition}.json`,
    JSON.stringify(file, null, 2)
  );

  console.log(`NFT: ${i}`);
  i++;
});
