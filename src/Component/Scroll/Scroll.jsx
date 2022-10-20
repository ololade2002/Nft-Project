import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import './Scroll.css';


export default function ScrollToTop() {
 
const [visible,setVisible] = useState(false)
window.addEventListener('scroll', ()=> {
    window.pageYOffset> 100 ? setVisible(true) : setVisible(false)
});

  return (
   <div className={`scrollToTop ${visible ? 'visible' : ''}`}>
 <a href="#">
    <BsChevronUp/>
 </a>
   </div>
  );
}
