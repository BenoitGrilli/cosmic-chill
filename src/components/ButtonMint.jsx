import { Web3Button } from "@thirdweb-dev/react";
import { contractAddress, contractAbi } from "./contract";

const ButtonMint = () => {
  return (
    <Web3Button
      contractAddress={contractAddress}
      contractAbi={contractAbi}
      // Call the name of your smart contract function
      action={(contract) => contract.call("mint")}
    >
      Mint your token
    </Web3Button>
  );
};

export default ButtonMint;