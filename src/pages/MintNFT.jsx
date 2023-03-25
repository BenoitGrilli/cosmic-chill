import previewGIF from "../images/cosmic-chill-gif.gif";

import { ConnectWallet, useContract, useNFTs, useMintNFT, Web3Button, ThirdwebNftMedia, useOwnedNFTs, useAddress } from "@thirdweb-dev/react"
import Description from "../components/Description";
import GetSupply from "../contract-component/Getsupply";
import GetTotalMinted from "../contract-component/GetTotalMinted";
import GetContractAddress from "../contract-component/GetContractAddress";
import GetBalanceOf from "../contract-component/GetBalanceOf";
import ButtonTemplate from "../components/ButtonTemplate";
import SomethingWentWrong from "./SomethingWentWrong";

import backgroundImage from "../images/background-2.jpg";

const contractAddress = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F";


const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "",}


export default function MintPage() {


const { contract } = useContract("0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F");

// hook nft du contrat
// const { data: nfts, isLoading, isError } = useNFTs(contract);
const { mutate: mintNFt} = useMintNFT(contract);

const address = useAddress();


// hook les nft d'un user 
const { data: nfts, isLoading, isError } = useOwnedNFTs(contract, address);


if (isError) {
  return (
    <div>
      <SomethingWentWrong/>
    </div>
  )
}

return(
<>

<div style={backgroundStyle}>


<div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        <header className="flex flex-col items-center justify-center pt-2">
        <h1 className="ml-3 text-5xl font-medium pb-2">GET YOUR COSMIC NFT</h1>
        

        <GetContractAddress/>

        <div className="mt-5 text-2xl p-5 text-center">
        <GetTotalMinted/>
        <GetBalanceOf/>
        </div>

   
         </header>
         <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
           <div className="flex flex-col items-center justify-center space-y-6">
             <h1 className="text-2xl font-bold text-secondary">
               Mint your NFT
             </h1>
             <p className="text-center leading-relaxed">
               <Description className = "text-black"/>
             </p>
           </div>
  
           <div className="flex flex-col items-center">
             <div className="flex w-full max-w-sm flex-col space-y-4">
               <div className="aspect-square w-full overflow-hidden rounded-md">
                 <img className="aspect-square object-cover" src={previewGIF} alt="Preview GIF" />
               </div>

               <div className="flex max-w-sm justify-center">
                 <GetTotalMinted/>
               </div>

               <div className="flex flex-col justify-center">
                 <Web3Button
                  contractAddress={contractAddress}
                  action={(contract) => {contract.erc721.claim(1)}}
                >
                Mint</Web3Button>
                <p className="text-pink-500 mt-2 text-center">You need 1 PLANET TOKEN TO MINT 1 NFT</p>
                
                <ButtonTemplate text="GET PLANET TOKEN"/>
                
  
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center space-x-2 p-6">
          <p className="text-sm">Powered by</p>
          <h1>Benoit GRILLI</h1>
        </footer>
      </div>
      </div>
      </>
)}


