import React from 'react'
import '../Styles/Footer.css'
import { Link } from "react-router-dom";
import {AiFillFire} from "react-icons/ai"; 
import {MdMovie} from "react-icons/md"; 
import {FaDesktop} from "react-icons/fa"; 
import {BsSearch} from "react-icons/bs"; 
function Footer() {

  const ToggleBg= ((e)=>{
    e.preventDefault();
     let arr1=document.getElementsByClassName("footerElement");

   //only  toggling selected option having same class name
   
    for(let i=0;i<arr1.length;i++){

      if(arr1[i].children[0].children[0] &&
        e.target.innerHTML===arr1[i].children[0].children[0].innerHTML ){
         
        arr1[i].classList.add("bgGlow");
      }
      else{
        arr1[i].classList.remove("bgGlow");
      }
    }

})

  return (
   <>
   <div className="footerContainer">

<div></div>

<div  className="footerElement bgGlow"  onClick={ToggleBg}>
           <Link to="/" > 
           <div className="footerData" >
             <AiFillFire></AiFillFire>
           <br />
         Trending
           </div> 
           </Link>
           </div>
          
           <div  className="footerElement"  onClick={ToggleBg}>
           <Link to="movies" > 
           <div className="footerData" >
          <MdMovie></MdMovie>
           <br />
          Movies 
           </div> 
           </Link>
           </div>
          

           <div  className="footerElement"  onClick={ToggleBg}>
           <Link to="tvSeries" > 
           <div className="footerData" >
          <FaDesktop></FaDesktop>
           <br />
        TV Series
           </div> 
           </Link>
           </div>
          

           <div  className="footerElement"  onClick={ToggleBg}>
           <Link  className="footerData" to="search" > 
           <div >
          <BsSearch></BsSearch>
           <br />
         Search
           </div> 
           </Link>
           </div>
          
           <div></div>
   </div>

   
   </>
  )
}

export default Footer