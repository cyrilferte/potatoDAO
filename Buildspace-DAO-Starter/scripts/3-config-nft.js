import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xCE62D19Ba3bE5B5654e31FE715bB2afe7A64f494",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "emoji potato",
        description: "This NFT will give you access to potatoDAO!",
        image: readFileSync("scripts/assets/potato_emoji.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()