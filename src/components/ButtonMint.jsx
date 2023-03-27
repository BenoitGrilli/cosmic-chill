import { Web3Button } from "@thirdweb-dev/react";
import { contractAddress} from "./contract";
const ButtonMint = () => {
  return (
    <Web3Button
      contractAddress={contractAddress}
      action={(contract) => contract.erc721.claim(1)}
    >
      MINT COSMIC NFT
    </Web3Button>
  );
};

export default ButtonMint;