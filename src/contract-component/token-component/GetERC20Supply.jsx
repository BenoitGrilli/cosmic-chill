import React from 'react';
import { useContractRead, useContract } from "@thirdweb-dev/react";


const contractAddress  = "0x4c336A987bB0BeB3bbC8aB90e54b90d66fD02Acf"

 export default function GetSupplyERC20() {
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "totalSupply");

  if (isError) {
    return (
      <div>
        <p className='text-white'>Something went wrong</p>
      </div>
    )
  }

    return (
      <div>
            {isLoading ?
            <p className='text-white'>Loading ...</p>
            :
            <p className='text-white'>Total Supply is : {Number(data.toString()) / 10**18} PLT  </p> 
        }
      </div>
    )
  }
