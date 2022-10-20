
import React from 'react';
import './Mint.css';
import {FaArrowRight  } from 'react-icons/fa';
import { MDBBtn } from 'mdb-react-ui-kit';

const Mint = () => {
  return (
   <div className="mint">
      <div className="mint">
        
        <div className="m-body">
        <h1>10,000+</h1>
        <h3>TOTAL ITEMS IN COLLECTION</h3>
        <p>
            There are many variations of lorem ipsum available
            ,but the majority has suffered altercation in some form ,
            by injected humor or randomised words which don't look 
            even slightly beliveable.
        </p>
        <MDBBtn rippleDuration={1000}>See All <FaArrowRight/></MDBBtn>
    </div>
    </div>
   </div>
  )
}

export default Mint;