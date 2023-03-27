import {useContract, useNFTs, ThirdwebNftMedia, useAddress } from "@thirdweb-dev/react"
import SomethingWentWrong from "./SomethingWentWrong";
import GetContractAddress from "../contract-component/GetContractAddress";
import backgroundImage from "../images/banner0.png";
import Navbar from "../components/Navbar";
import BorderCard from "../components/BorderCard";
import {contractAddress} from '../components/contract';


export default function Gallery() {

const { contract } = useContract(contractAddress);


const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "repeat",
  backgroundPosition: "center",
  backgroundSize: "auto",
  minHeight: "100vh",
};





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
   <div class="mx-auto grid grid-cols-4 gap-4 flex-wrap justify-center items-center">
      {nfts?.map((nft) => (
        <div >
          <div>
          <BorderCard>
            <ThirdwebNftMedia key={nft.id} metadata={nft.metadata} height={200} />
            </BorderCard>

            <BorderCard>
            <h1 className="text-center text-2xl font-bold">
                      #{nft.metadata.id}
                    </h1>
            <p className="text-center font-bold mb-2">owned by</p>
            <p className="text-center">{nft.owner}</p>
            </BorderCard>
            
          </div>
        </div>
      ))}
    </div>
  )}
</div>


)
}