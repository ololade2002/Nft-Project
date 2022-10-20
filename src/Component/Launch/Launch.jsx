import React from 'react';
import './Launch.css';
import img1 from '../../Nft assets/img4.jpg';
import { MDBBtn } from 'mdb-react-ui-kit';

const Launch = () => {
  return (
   <div className="launch">
<div className="launch-body">
 <div className="left-l">
    <h4>Launching Soon !!!</h4>
    <h3>An NFT like no other</h3>
    <p>Don't miss out on the release of our new NFT. Sign up
        below to receive updates when we go live...
    </p>
    <MDBBtn rippleDuration={1000} className="btn2">
        Sign Up
        </MDBBtn>
        </div>

 <div className="right-l">
    <img src={img1} alt="" />
 </div>
 </div>
   </div>
  )
}

export default Launch;