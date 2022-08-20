import React from 'react'
import "../Styles/SingleComponent.css"
import { Link } from 'react-router-dom'
import { GlobalContext } from './contex'
import { useState, useEffect } from 'react'
const SingleComponent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  page_type
}) => {
  const {updateType} =GlobalContext();

const [wordDate, setwordDate] = useState("");

var m=["Jan" ,"Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , 
"Sep" , "Oct" , "Nov" , "Dec"]


useEffect(() => {
 
  var year="";
  var day="";
   var month="";
   
 var i=0;
 while(i<date.length&&date[i]!=='-'){
   year+=date[i];
   i++;
 }
i++;

while(i<date.length&&date[i]!=='-'){
  month+=date[i];
  i++;
}
i++;
var monthInt=parseInt(month,10);
month=m[monthInt-1];

while(i<date.length){
  day+=date[i];
  i++;
}
console.log(date, day , monthInt , year);

setwordDate(`${day} ${month}, ${year}`);
  if(!date){
    setwordDate("");
  }

 
}, [])


  return(
   
    <Link  onClick={()=>{updateType(media_type)}} style={ {textDecoration: 'none'}} to={`/${id}`}   className='cardContainer'>
       
      <div className="cardImageContainer">
      <img className='cardImage' src={poster?`https://image.tmdb.org/t/p/w300${poster}`: "https://www.movienewz.com/img/films/poster-holder.jpg" } alt="" />
      </div>
      <div className="cardHead">
       {title} 
     </div>

      <div className="cardSubhead">
        <div className="cardType">
         { page_type==="trending"?media_type:(vote_average?vote_average:"-")+"/10"}
        </div>
        <div className="cardDate">
          {wordDate}
        </div>
      </div>
    </Link>
   
  )
}

export default SingleComponent