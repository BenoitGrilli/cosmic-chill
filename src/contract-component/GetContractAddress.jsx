import React from 'react';
import {contractAddress, contractUrl} from '../components/contract';


 export default function GetContractAddress() {
  const contractLink = (
      <a className = "text-sky-200" href={contractUrl} target="_blank" rel="noopener noreferrer">
        {contractAddress}
      </a>
    );
    
    return (
      <div>
        <p className='text-white'>contract address is : {contractLink} </p> 
      </div> 
    )
  }
