import React from 'react';
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";

const contractAddress  = "0xB6Ba71907421B9e244e35a26cDE4Db3535316BCc"


 export default function GetERC20BalanceOf() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "balanceOf", address );

  if (isError) {
    return (
      <div>e
        <p className='text-white'>Something went wrong</p>
      </div>
    )
  }
  
    return (
      <div>
            {isLoading ?
              <p className='text-white'>Loading ...</p>
            :
        <p className='text-white'>You own : {Number(data.toString())/ 10**18} PLT</p> 

        }
      </div>    
    ) 
  }
