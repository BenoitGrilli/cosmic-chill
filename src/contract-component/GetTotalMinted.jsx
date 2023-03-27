import React from 'react';
import { useContractRead, useContract } from "@thirdweb-dev/react";
import {contractAddress} from '../components/contract';



 export default function GetTotalMinted() {
  const { contract } = useContract(contractAddress);
  const { data, isLoading, isError } = useContractRead(contract, "totalMinted");

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
        <p className='text-white'>Total minted : {data.toString()} / 400 </p> 
        }
      </div>    
    ) 
  }
