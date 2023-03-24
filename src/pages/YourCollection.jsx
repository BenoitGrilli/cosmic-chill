import { ConnectWallet, useContract, useNFTs, useMintNFT, Web3Button, ThirdwebNftMedia, useOwnedNFTs, useAddress } from "@thirdweb-dev/react"
import GetBalanceWallet from "../components/Getsupply";


export default function YourCollection() {

const { contract } = useContract("0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F");


const address = useAddress();

// hook les nft d'un user 
const { data: nfts, isLoading, isError } = useOwnedNFTs(contract, address);


if (isError) {
  return (
    <div>
      <p>Something went wrong. Don't forget to connect your wallet</p>
      <ConnectWallet/>
    </div>
  )
}

return(
<div>
<h1 className="pt-8 text-center">YOUR COLLECTION</h1>
    {isLoading ? (
        <p> Loading ... </p>
    ) : (

        nfts?.filter(nft => nft.owner ==address).map((nft) => (
           

            <div className="mx-auto flex flex-col ">
                <div className="flex flex-col items-center justify-center p-6 md:p-12">
                    <div className="text-white bg-blue-500 text-center ">
                <ThirdwebNftMedia
                key={nft.id}
                metadata={nft.metadata}
                height={200}
                // style={{ borderRadius: "10px"}}
                />
                <p className="p-3">{nft.metadata.name}</p>
                <p>owned by</p>
                <p>{nft.owner}</p>
                    </div>
                </div>

            </div>

        ))

    )
        
    
    }

</div>
)
}