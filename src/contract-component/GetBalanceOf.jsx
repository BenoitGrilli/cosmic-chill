import React from 'react';
import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";
import {contractAddress} from '../components/contract';

 export default function GetBalanceOf() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "balanceOf", address );

  if (isError) {
    return (
      <div>
        <p >Something went wrong</p>
      </div>
    )
  }
  
    return (
      <div>
            {isLoading ?
              <p className='text-white'>Loading ...</p>
            :
        <p>You own : {data.toString()} / 400 </p> 
        }
      </div>    
    ) 
  }
