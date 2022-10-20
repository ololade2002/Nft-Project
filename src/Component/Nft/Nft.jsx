
import React from 'react';
import './Nft.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../Nft assets/3.png';
import img2 from '../../Nft assets/1 (1).png';
import img3 from '../../Nft assets/4 (1).png';
import img4 from '../../Nft assets/nft12.jpg';
import img5 from '../../Nft assets/nft13.jpg';
import img6 from '../../Nft assets/6.png';
import img7 from '../../Nft assets/9.png';
import img8 from '../../Nft assets/nft8.jpg';
import img9 from '../../Nft assets/anime4.jpg';
import img10 from '../../Nft assets/purple1.jpg';
import img11 from '../../Nft assets/55.png';
import img12 from '../../Nft assets/boy1.jpg';
import img13 from '../../Nft assets/afrofuturism2.jfif';
import img14 from '../../Nft assets/panda4.webp';





const Nft = () => {

  const responsive = {
    superLargeDesktop: {
    
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    minitab: {
      breakpoint: { max: 768, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1
    }
  };

  return (
   <div className="nft "  >

<Carousel responsive={responsive} additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={800}
  centerMode={false}
  className="carousel "
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  swipeable
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}>
   
   
 <div className='img-slider'><img src={img1} alt="" /></div>
 <div className='img-slider'><img src={img2} alt="" /></div>
 <div className='img-slider'><img src={img3} alt="" /></div>
 <div className='img-slider'><img src={img4} alt="" /></div>
 <div className='img-slider'><img src={img5} alt="" /></div>
 <div className='img-slider'><img src={img6} alt="" /></div>
 <div className='img-slider'><img src={img7} alt="" /></div>
 <div className='img-slider'><img src={img8} alt="" /></div>
 <div className='img-slider'><img src={img9} alt="" /></div>
 <div className='img-slider'><img src={img10} alt="" /></div>
 <div className='img-slider'><img src={img11} alt="" /></div>
 <div className='img-slider'><img src={img12} alt="" /></div>
 <div className='img-slider'><img src={img13} alt="" /></div>
 <div className='img-slider'><img src={img14} alt="" /></div>

</Carousel>


   
   </div>
  )
}

export default Nft;