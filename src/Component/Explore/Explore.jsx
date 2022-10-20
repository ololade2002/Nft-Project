
import React from 'react';
import Tabs, {Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';
import './Explore.css';
import { afroData } from '../../../Data/Data';
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { FaAirbnb } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';
import { BsEye, BsFillCheckCircleFill } from 'react-icons/bs';
import { BsLink } from 'react-icons/bs';
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaVimeoSquare } from 'react-icons/fa';
import { blackData } from '../../../Data/Data';
import { alienData } from '../../../Data/Data';
import { pandaData } from '../../../Data/Data';

const Explore = () => {
  return (
    <div className="explore" id='nft'>
        <h2>Explore Marketplace</h2>
         <Tabs
          activeTab="1"
          className="tabs"
          ulClassName=""
          activityClassName=""
          onClick={(event, tab) => console.log(event, tab)}
        >
            <Tab title="AfroFuturism" className="">
                <div className="tab-content ">
                 {afroData.map((afro,index)=> (
                    <div className="afro-preview" key={index}>
                   <img src={afro.img} alt="" />
                   {/*Card body*/}
                   <div className="card-body">
                   <h4> {afro.title}</h4>
                   <div>
                   <h5>{afro.text}</h5>
                   <div className="crypto-icon">
                   <FaBitcoin/>
                   <FaAirbnb/>
                   <FaEthereum/>
                   <FaVimeoSquare/>
                   <BsLink/>
                   </div>
                   </div>
                   {/*Bottom*/}
                   <div className="bottom">
                     <div>
                     <div>{afro.owned} </div>
                    <div><img src={afro.pic} alt="" />{afro.owner} <BsFillCheckCircleFill/></div>
                    </div> 
                    <div>
                    <div>{afro.btc} BTC </div>
                    <h6>$134,234</h6>
                    </div>
                   </div>
                  <div className="bottom-button">
                    <MDBBtn className="btn3">   <BsEye/> View NFT</MDBBtn>
                    <MDBBtn className="btn4"> <FaCartArrowDown/> Buy Now</MDBBtn>
                  </div>
                   </div>
                    </div>
                 ))}

                </div>
              
            </Tab>
           
            <Tab title="AlienX" className="">
                <div className="tab-content ">
                   
                {alienData.map((afro,index)=> (
                    <div className="afro-preview" key={index}>
                   <img src={afro.img} alt="" />
                   {/*Card body*/}
                   <div className="card-body">
                   <h4> {afro.title}</h4>
                   <div>
                   <h5>{afro.text}</h5>
                   <div className="crypto-icon">
                   <FaBitcoin/>
                   <FaAirbnb/>
                   <FaEthereum/>
                   <FaVimeoSquare/>
                   <BsLink/>
                   </div>
                   </div>
                   {/*Bottom*/}
                   <div className="bottom">
                     <div>
                     <div>{afro.owned} </div>
                    <div><img src={afro.pic} alt="" />{afro.owner}  <BsFillCheckCircleFill/></div>
                    </div> 
                    <div>
                    <div>{afro.btc} BTC </div>
                    <h6>$134,234</h6>
                    </div>
                   </div>
                  <div className="bottom-button">
                    <div className="btn3">   <BsEye/> View NFT</div>
                    <div className="btn4"> <FaCartArrowDown/> Buy Now</div>
                  </div>
                   </div>
                    </div>
                 ))}

                </div>
             
            </Tab>

            <Tab title="Panda" className="">
                <div className="tab-content">
                  
                {pandaData.map((afro,index)=> (
                    <div className="afro-preview" key={index}>
                   <img src={afro.img} alt="" />
                   {/*Card body*/}
                   <div className="card-body">
                   <h4> {afro.title}</h4>
                   <div>
                   <h5>{afro.text}</h5>
                   <div className="crypto-icon">
                   <FaBitcoin/>
                   <FaAirbnb/>
                   <FaEthereum/>
                   <FaVimeoSquare/>
                   <BsLink/>
                   </div>
                   </div>
                   {/*Bottom*/}
                   <div className="bottom">
                     <div>
                     <div>{afro.owned} </div>
                    <div><img src={afro.pic} alt="" />{afro.owner}  <BsFillCheckCircleFill/></div>
                    </div> 
                    <div>
                    <div>{afro.btc} BTC </div>
                    <h6>$134,234</h6>
                    </div>
                   </div>
                  <div className="bottom-button">
                    <div className="btn3">   <BsEye/> View NFT</div>
                    <div className="btn4"> <FaCartArrowDown/> Buy Now</div>
                  </div>
                   </div>
                    </div>
                 ))}

                </div>
             
            </Tab>

            <Tab title="CryptoPunk" className="">
                <div className="tab-content">

                {blackData.map((afro,index)=> (
                    <div className="afro-preview" key={index}>
                   <img src={afro.img} alt="" />
                   {/*Card body*/}
                   <div className="card-body">
                   <h4> {afro.title}</h4>
                   <div>
                   <h5>{afro.text}</h5>
                   <div className="crypto-icon">
                   <FaBitcoin/>
                   <FaAirbnb/>
                   <FaEthereum/>
                   <FaVimeoSquare/>
                   <BsLink/>
                   </div>
                   </div>
                   {/*Bottom*/}
                   <div className="bottom">
                     <div>
                     <div>{afro.owned} </div>
                    <div><img src={afro.pic} alt="" />{afro.owner}  <BsFillCheckCircleFill/></div>
                    </div> 
                    <div>
                    <div>{afro.btc} BTC </div>
                    <h6>$134,234</h6>
                    </div>
                   </div>
                  <div className="bottom-button">
                    <div className="btn3">   <BsEye/> View NFT</div>
                    <div className="btn4"> <FaCartArrowDown/> Buy Now</div>
                  </div>
                   </div>
                    </div>
                 ))}
                </div>
               
            </Tab>
        </Tabs>
    </div>
  )
}

export default Explore;