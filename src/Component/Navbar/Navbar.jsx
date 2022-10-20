
import React from 'react';
import './Navbar.css';
import logo from '../../Nft assets/logo.png';
import { IoWalletOutline } from "react-icons/io5";
import { useState } from 'react';
import img1 from '../../Nft assets/close.svg';
import img2 from '../../Nft assets/menu.svg';
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { MDBBtn } from 'mdb-react-ui-kit';

const Navbar = ({changeTheme,currentTheme}) => {

   const [mobile,setMobile] = useState(false)

  return (
  <div className="nav">

 <div>
    <div className="logo">
        <img src={logo} alt="" />
    </div>
 </div>

<div className="mode" onClick={changeTheme}>
   {currentTheme === 'dark' ? <ImSun/> : <BsFillMoonFill/>}
</div>

 <div>
   <ul className={mobile ? 'mobile-link': 'navLink'}onClick={()=>setMobile(false)} >
    <li><a href="#home">Home</a></li>
    <li><a href="#artist">Artist</a></li>
    <li><a href="#nft">NFT</a></li>
    <li><a href="#win">Community</a></li>
   
    <div className='link'>
    <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light text-light" />
            ) : (
              <BsFillMoonFill className="dark text-dark" />
            )}
          </li>
    <MDBBtn  rippleDuration={1000}  className="button">Connect Wallet <IoWalletOutline/> </MDBBtn>
    

 </div>

    </ul>
 </div>



 {/*MENU*/}
<button className="menu" onClick={()=>setMobile(!mobile)}>
{mobile ? <img src={img1} alt="" /> : <img src={img2} alt="" /> }
</button>


  </div>
  )
}

export default Navbar;


