import {
  ConnectWallet,
  useContract,
  useNFTs,
  useMintNFT,
  Web3Button,
  ThirdwebNftMedia,
  useOwnedNFTs,
  useAddress,
} from "@thirdweb-dev/react";
import NFTCard from "../components/NFTCARD";
import GetContractAddress from "../contract-component/GetContractAddress";
import SomethingWentWrong from "./SomethingWentWrong";
import backgroundImage from "../images/background-5.png";
import Navbar from "../components/Navbar";


const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",}

export default function YourCollection() {
  const { contract } = useContract(
    "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"
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
      <div style={backgroundStyle}>
        <Navbar/>
        <div className="text-center text-white">
          <h1 className="pt-8 text-4xl">YOUR COLLECTION</h1>
          <GetContractAddress />
        </div>

        {isLoading ? (
          <p className="text-center text-2xl"> Loading ... </p>
        ) : (
          <div className="mx-auto flex flex-row flex-wrap">
            {nfts
              ?.filter((nft) => nft.owner == address)
              .map((nft) => (
                <div className="p-6 md:p-6">
                  <div className="max-w-md mx-auto my-10 border border-white border-opacity-25 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 shadow-lg rounded-xl backdrop-blur-lg">
                    <ThirdwebNftMedia
                      key={nft.id}
                      metadata={nft.metadata}
                      height={200}
                    />
                    <h2 className="text-center text-2xl font-bold my-4 text-white">
                      {nft.metadata.name}
                    </h2>
                    <p className="p-3 text-s text-purple-300 ml-2">
                      <span className="font-bold">owned by</span>
                      <p>{nft.owner}</p>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* <NFTCard/> */}
    </>
  );
}
