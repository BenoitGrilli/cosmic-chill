import { ConnectWallet, useContract, useNFTs, useMintNFT, Web3Button, ThirdwebNftMedia, useOwnedNFTs, useAddress } from "@thirdweb-dev/react"
import SomethingWentWrong from "./SomethingWentWrong";
import GetContractAddress from "../contract-component/GetContractAddress";
import backgroundImage from "../images/banner0.png";
import Navbar from "../components/Navbar";
export default function Gallery() {

const { contract } = useContract("0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F");


const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",}

const address = useAddress();

// hook les nft d'un user 
const { data: nfts, isLoading, isError } = useNFTs(contract, address);



if (isError) {
    return (
      <div>
        <SomethingWentWrong/>
      </div>
    )
  }

return(
<div className=" text-white" style={backgroundStyle}>
<Navbar />
    <div className="text-center">
      <h1 className="pt-8 text-4xl">GALLERY</h1>
      <GetContractAddress/>
      
    </div>
  {isLoading ? (
    <p className="text-center text-2xl"> Loading ... </p>
  ) : (
    <div className="mx-auto flex flex-row flex-wrap">
      {nfts?.map((nft) => (
        <div className="p-6 md:p-12">
          <div>
            <ThirdwebNftMedia key={nft.id} metadata={nft.metadata} height={200} />
            <p className="p-3">{nft.metadata.name}</p>
            <p>owned by</p>
            <p>{nft.owner}</p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


)
}