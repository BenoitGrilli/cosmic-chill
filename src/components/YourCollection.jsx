import { ConnectWallet, useContract, useNFTs, useMintNFT, Web3Button, ThirdwebNftMedia, useOwnedNFTs, useAddress } from "@thirdweb-dev/react"


export default function YourCollection() {

const { contract } = useContract("0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F");


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
<div>
<ConnectWallet accentColor="blue" colorMode="light"/>
<h1>YOUR COLLECTION</h1>
    {isLoading ? (
        <p> Loading ... </p>
    ) : (

        nfts?.map((nft) => (
            <div>
                <ThirdwebNftMedia
                key={nft.id}
                metadata={nft.metadata}
                height={200}
                />

                <p>{nft.metadata.name}</p>

            </div>
        ))

    )
        
    
    }

</div>

)
}