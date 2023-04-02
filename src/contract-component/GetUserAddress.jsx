import React from 'react';
import { useAddress } from "@thirdweb-dev/react";


const contractUrl = "https://zhejiang.beaconcha.in/address/"

 export default function GetUserAddress() {

const address = useAddress();
  const link = (
      <a className = "text-sky-200" href={contractUrl + address} target="_blank" rel="noopener noreferrer">
        {address}
      </a>
    );
    
    return (
      <div>
        <p className='text-white'>you are connected as : {link} </p> 
      </div> 
    )
  }
