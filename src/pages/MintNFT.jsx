import previewGIF from "../images/cosmic-chill-gif.gif";

import { ConnectWallet, useContract, useNFTs, useMintNFT, Web3Button, ThirdwebNftMedia, useOwnedNFTs, useAddress } from "@thirdweb-dev/react"
import Description from "../components/Description";
import GetSupply from "../contract-component/Getsupply";
import GetTotalMinted from "../contract-component/GetTotalMinted";
import GetContractAddress from "../contract-component/GetContractAddress";


const contractAddress = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"


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
      <p>Something went wrong</p>
    </div>
  )
}

return(
<div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        <header className="flex flex-col items-center justify-center p-6 md:p-12">
        <h1 className="ml-3 text-2xl pb-5">Cosmic Chill</h1>
        <GetTotalMinted/>
        <GetContractAddress/>
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

               <div className="flex justify-center">
                 <Web3Button
                  contractAddress={contractAddress}
                  action={(contract) => {contract.erc721.claim(1)}}
                >
                Mint</Web3Button>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center space-x-2 p-6">
          <p className="text-sm">Powered by</p>
          <h1>Benoit GRILLI</h1>
        </footer>
      </div>
)}

