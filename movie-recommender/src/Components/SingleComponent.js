import React from 'react'
import "../Styles/SingleComponent.css"
import { Link } from 'react-router-dom'
import { GlobalContext } from './contex'
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
          {date}
        </div>
      </div>
    </Link>
   
  )
}

export default SingleComponent