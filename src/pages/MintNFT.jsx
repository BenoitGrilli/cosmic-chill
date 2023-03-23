
import previewGIF from "../images/cosmic-chill-gif.gif";
import { ChainId } from "@thirdweb-dev/sdk";
import { ThirdwebNftMedia, Web3Button } from "@thirdweb-dev/react"


import { Zhejiang } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract, } from "@thirdweb-dev/react";

const contractAddress = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"

function MintPage() {
  
  return (
    <ThirdwebProvider activeChain={ Zhejiang }>

                <Web3Button
                contractAddress={contractAddress}
                action={(contract) => contract.erc721.claim(1)}
                onSubmit={() => console.log("Transaction submitted")}
                onSuccess={(result) => alert("Success!")}
                onError={(error) => alert("Transaction annulé!")}
                >
                Claim NFT
                </Web3Button>

                <ThirdwebNftMedia metadata={nft.metada}
                 />


      <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        <header className="flex flex-col items-center justify-center p-6 md:p-12">
          <h1 className="ml-3 text-2xl">Cosmic Chill</h1>
        </header>
        <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-2xl font-bold text-secondary">
              Mint your NFT
            </h1>
            <p className="text-center leading-relaxed">
              HashLips is a place where NFT enthusiasts and programmers gather
              together to collect, code, trade and talk about anything and
              everything regarding programming and blockchain technology!
            </p>
          </div>
        

          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-sm flex-col space-y-4">
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <img className="aspect-square object-cover" src={previewGIF} alt="Preview GIF" />
              </div>

              <div className="flex max-w-sm justify-between">
                <p>Total Minted</p>
                <p>0 / 5</p>
              </div>

              <div className="flex justify-center">
                <button className="rounded-full bg-primary px-6 py-2 text-white hover:bg-opacity-75">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center space-x-2 p-6">
          <p className="text-sm">Powered by</p>
          <h1>Benoit GRILLI</h1>
        </footer>
      </div>

    </ThirdwebProvider>
    
  );
}

export default MintPage;
