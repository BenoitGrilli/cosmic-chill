import { Web3Button, useAddress } from "@thirdweb-dev/react";
import { contractAddress } from "./contractERC20";

export default function ButtonMintERC20() {

const address = useAddress();
    
  return (
    <Web3Button
    contractAddress= {contractAddress}
    action={(contract) => contract.erc20.claim(1, address)}
  >
    GET PLANET TOKEN
  </Web3Button>
  );
};

