import React from 'react';
import { useContractRead, useContract } from "@thirdweb-dev/react";

const contractAddress  = "0x12E0bFcC3c4D7cbbA8636464AAFa1044b20ddA0F"

 export default function GetSupply() {
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "totalSupply");

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
        <p>Supply is : {data.toString()} </p> 
        }
      </div>
    )
  }
