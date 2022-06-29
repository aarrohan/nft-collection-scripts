// N1 -> Number of files you want to combine (Type: int)
// N2 -> Starting index of the new files (Type: int)
// PATH -> Where your files are stored
// NEW-PATH -> Where you want to save the updated files

const fs = require("fs");

for (let i = 1; i <= N1; i++) {
  let jsonFile = fs.readFileSync(`./PATH/${i}.json`);
  jsonFile = JSON.parse(jsonFile);

  fs.writeFileSync(
    `./NEW-PATH/${i + N2}.json`,
    JSON.stringify(jsonFile, null, 2)
  );

  fs.renameSync(`./PATH/${i}.png`, `./NEW-PATH/${i + N2}.png`);

  console.log(`NFT: ${i}`);
}
