
import React from 'react';
import './Footer.css';
import img1 from '../../Nft assets/logo.png';
import img2 from '../../Nft assets/instagram.svg';
import img3 from '../../Nft assets/linkedin.svg';
import img4 from '../../Nft assets/twitter.svg';



const Footer = () => {
  return (
   <div className="footer">

<div className='first'>
        <div>
      <div className="logo-f">
        <img src={img1} alt="" />
      </div>
      <p>Exclusive NFT Collection</p>
      <div className="social">
    <li><img src={img2} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img4} alt="" /></li>

</div>
        </div>

        <div>
            <ul>
            <h3>ABOUT</h3>
                <li>Content</li>
                <li>Legal</li>
                <li>Create</li>
                <li>Explore</li>
                <li>Terms </li>
            </ul>
        </div>

        <div>
            <ul>
            <h3>NFT</h3>
                <li>OpenSea</li>
                <li>MaKer</li>
                <li>Earn</li>
            </ul>
        </div>

        <div>
            <ul>
            <h3>Community</h3>
                <li>Help Center</li>
                <li>Partner</li>
                <li>Suggestion</li>
                <li>Blog</li>
                <li>Newsletter</li>
            </ul>
        </div>

      

    </div>

<div className='hr'></div>

    <div className='second'>
<div>
    <h4>Copyright &copy;   2021 NftLanding. All Rights Reserved.</h4>
</div>

<div className="social">
    <li><img src={img2} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img4} alt="" /></li>

</div>

    </div>

   </div>
  )
}

export default Footer;