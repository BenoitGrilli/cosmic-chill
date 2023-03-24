import { Web3Button } from '@thirdweb-dev/react';
import React from 'react';

import { useContractRead, useContract } from "@thirdweb-dev/react";


const contractAddress  = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"

 export default function GetSupply() {
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useContractRead(contract, "maxTotalSupply");
  
    return (
      <div>
            {isLoading ?
              <p>Loading ...</p>
            :
        <p>Contract maxsupply : {data} </p> 
        }
      </div>
    
      
    )

  
  }
