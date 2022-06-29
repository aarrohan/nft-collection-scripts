// N1 -> Number of files you want to shuffle (Type: int)
// PATH -> Where your files are stored
// NEW-PATH -> Where you want to save the updated files

const fs = require("fs");

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let nfts = Array.from({ length: N1 }, (_, i) => i + 1);
let shuffleAbleNFTs = Array.from({ length: N1 }, (_, i) => i + 1);

let shuffledNFTs = shuffle(shuffleAbleNFTs);

nfts.forEach((nft, index) => {
  let jsonFile = fs.readFileSync(`./PATH/${nft}.json`);
  jsonFile = JSON.parse(jsonFile);

  fs.writeFileSync(
    `./NEW-PATH/${shuffledNFTs[index]}.json`,
    JSON.stringify(jsonFile, null, 2)
  );

  fs.renameSync(`./PATH/${nft}.png`, `./NEW-PATH/${shuffledNFTs[index]}.png`);

  console.log(`NFT: ${nft} -> ${shuffledNFTs[index]}`);
});
