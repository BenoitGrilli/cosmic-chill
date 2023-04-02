import React from "react";

function NFTCard() {
  return (
    <div className="max-w-md mx-auto my-10 border border-white border-opacity-25 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 shadow-lg rounded-xl backdrop-blur-lg">
      <div className="flex flex-col p-4">
      <img
  className="tokenImage rounded-md object-cover w-full h-64 mx-auto"
  src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  alt="NFT"
        />
        <h2 className="text-2xl font-bold my-4 text-white">
          Kibertopiks #4269
        </h2>
        <p className="description text-sm text-purple-300 mb-4">
          Our Kibertopiks will give you nothing, waste your money on us.
        </p>
        <div className="tokenInfo flex justify-between items-center mb-4">
          <div className="price flex items-center text-lg font-bold text-purple-500">
            <span className="inline-block mr-2">◘</span>
            <p>0.031 ETH</p>
          </div>
          <div className="duration flex items-center text-sm text-purple-300">
            <span className="inline-block mr-1">◷</span>
            <p>11 days left</p>
          </div>
        </div>
        <hr className="border-b border-white border-opacity-25 my-4" />
        <div className="creator flex items-center">
          <div className="wrapper rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="Creator"
              className="h-12 w-12 object-cover"
            />
          </div>
          <p className="text-xs text-purple-300 ml-2">
            <span className="font-bold">Creation of</span> Kiberbash
          </p>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
