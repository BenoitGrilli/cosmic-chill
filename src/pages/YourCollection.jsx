import {
  useContract,
  ThirdwebNftMedia,
  useOwnedNFTs,
  useAddress,
} from "@thirdweb-dev/react";

import GetContractAddress from "../contract-component/GetContractAddress";
import SomethingWentWrong from "./SomethingWentWrong";

import Navbar from "../components/Navbar";
import BorderCard from "../components/BorderCard";
import GetUserAddress from "../contract-component/GetUserAddress";

import {contractAddress} from '../components/contract';
import NavbarV2 from "../components/NavbarV2";


export default function YourCollection() {

  const background = "bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900";
  const { contract } = useContract(contractAddress
  );
  const address = useAddress();

  // hook les nft d'un user
  const { data: nfts, isLoading, isError } = useOwnedNFTs(contract, address);
  

  if (isError) {
    return (
      <div>
        <SomethingWentWrong />
      </div>
    );
  }

  return (
    <>
      <div className={background}>
        <NavbarV2 />
        <div className="py-20 text-center">
          <h1 className="text-white text-4xl font-bold mb-8">YOUR COLLECTION</h1>
          <div className="flex flex-col items-center">
            <GetContractAddress />
            <GetUserAddress />
          </div>
        </div>

        {isLoading ? (
          <p className="pt-36 text-white text-center text-2xl" > Loading ... </p>
        ) : (
          <div class="mx-auto flex flex-row flex-wrap justify-center items-center">
          {nfts
              ?.filter((nft) => nft.owner === address)
              .map((nft) => (
                <div className="p-6 md:p-6">
                  <BorderCard>
                    <ThirdwebNftMedia key={nft.id} metadata={nft.metadata} />
                  </BorderCard>

                  <BorderCard className="mt-6">         
                    <h1 className="text-center text-2xl font-bold">
                      #{nft.metadata.id}
                    </h1>
                    <p className="text-center font-bold mb-2">owned by</p>
                    <p className="text-center">{nft.owner}</p>
                  </BorderCard>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* <NFTCard/> */}
    </>
  );
}
