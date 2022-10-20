
import React from 'react';
import { artisteData } from '../../../Data/Data';
import './Artiste.css';
import { RiMessengerLine } from "react-icons/ri";
import { FaDiscord} from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';

const Artiste = () => {


  return (
  <div className="artiste" id='artist'>
    <div className='head'>
     <h2>Top Sellers</h2>
  <form >
    <label>Timeframe</label>
    <select className="select">
            <option value="Today">Today</option>
            <option disabled  value="H/s" >6 days</option>
            <option disabled value="KH/s">30 days</option>
        
          </select>
  </form>
  </div>
            
                <div className="artiste-body">
        {artisteData.map((data,index)=>(
            <div className='artiste-preview' key={index}>
         <div className="prev">
         <img src={data.img} alt="" />
         <div>
           <h5>{data.name} <BsCheck/></h5>
           <h5>{data.eth} <span> ETH</span> </h5>
          <div className="icons">
          <RiMessengerLine/>
           <FaDiscord/>
           <FaTwitter/>
          </div>
         </div>
       
         </div>
            </div>
            
        ))}
    </div>
      </div>

  )
}

export default Artiste;