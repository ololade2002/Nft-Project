import React from 'react';
import './Feature.css';
import { featuresData } from '../../../Data/Data';



const Feature = () => {
  return (
  <div className="feature">
    <h1>Create And Sell Your <span>NFTs</span></h1>
    <div className="feature-body">
  {featuresData.map((item,index)=> (
    <div className="features-preview" key={index}>
      <img src={item.img} alt="" />
       <div className="card-f">
        <p>{item.step}</p>
        <h3>{item.title}</h3>
        <h6>{item.text}</h6>
    
       </div>
    </div>
  ))}
  </div>
  </div>
  )
}

export default Feature;

