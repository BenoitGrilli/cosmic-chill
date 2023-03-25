import React from 'react';
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";

const contractAddress  = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"


 export default function GetBalanceOf() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "balanceOf", address );

  if (isError) {
    return (
      <div>
        <p>Something went wrong</p>
      </div>
    )
  }
  
    return (
      <div>
            {isLoading ?
              <p>Loading ...</p>
            :
        <p>You own : {data.toString()} / 200 </p> 
        }
      </div>    
    ) 
  }
