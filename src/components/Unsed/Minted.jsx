import React from "react";

const Minted = (props) => {
  return (

    <div className="text-gray-600 body-font">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-indigo-500">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 className="text-4xl font-bold mb-8">Mint Successful</h1>

            <img src={props.image} alt={props.name} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
            <div className="text-center mb-8">
                <p className="text-lg font-bold mb-2">{props.name}</p>
                <p className="mb-2">Owned by:</p>
                <p className="font-mono text-sm mb-2">{props.owner}</p>
                <p className="mb-2">Asset ID:</p>
                <p className="font-mono text-sm mb-2">{props.assetId}</p>
                <p className="mb-2">Current Price:</p>
                <p className="font-bold text-lg mb-2">{props.price} ETH</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Minted;
