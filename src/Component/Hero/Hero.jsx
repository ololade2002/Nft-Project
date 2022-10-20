import React from 'react';
import './Hero.css';
import eth from '../../Nft assets/eth2.png';
import img1 from '../../Nft assets/women-with-vr.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Hero = () => {
  return (
   <div className="hero" id='home'>
    <div className="hero-left">
   <h2>Discover  extraordinary <span>Monster</span>  NFTs.</h2>
   <p>The worlds largest digital marketplace for crypto 
    collectibles and non-fungible tokens (NFTs)
   </p>

<ul className="token">
    <li>
        <img src={eth} alt="" />
        <div>
            <h2>42K +</h2>
            <p>Active Users</p>
        </div>
    </li>

    <li>
        <img src={eth} alt="" />
        <div>
            <h2>8K +</h2>
            <p>Artworks</p>
        </div>
    </li>

    <li>
        <img src={eth} alt="" />
        <div>
            <h2>2k +</h2>
            <p>Artist</p>
        </div>
    </li>  
</ul>

<div className="hero-button">
  <MDBBtn rippleDuration={1000} >Explore</MDBBtn>
  <MDBBtn rippleDuration={1000} className='' >Create NFTs</MDBBtn>
  </div>

    </div>

    <div className="hero-right">
        <div className="blur1"></div>
        <img src={img1} alt="" />
    </div>

   </div>
  )
}

export default Hero;