import { createDID, registerDID } from "@ayanworks/polygon-did-registrar";
import * as dotenv from 'dotenv'
dotenv.config()

const network: string = "testnet";

async function main() {
  // create a new did
  const did = await createDID(network, process.env.PRIVATE_KEY);
  console.log("DID created: ", did.data.did);

  // register the did
  const txHash = await registerDID(did.data.did, process.env.PRIVATE_KEY);
  console.log("DID registered: ", txHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});