import React from 'react';

const contractAddress  = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"
const contractUrl = "https://zhejiang.beaconcha.in/address/0x12e0bfcc3c4d7cbba8636464aafa1044b20dda0f"

 export default function GetContractAddress() {
  const contractLink = (
      <a className = "text-blue-600" href={contractUrl} target="_blank" rel="noopener noreferrer">
        {contractAddress}
      </a>
    );
    
    return (
      <div>
        <p>contract address is : {contractLink} </p> 
      </div> 
    )
  }
