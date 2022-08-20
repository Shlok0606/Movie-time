import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { GlobalContext } from './contex'
import axios from 'axios'
import "../Styles/Individual.css"
import Corousel from "../Corousel/Courousel"
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Individual =()=>{
  const {id}= useParams();
 
 // const url=`https://api.themoviedb.org/3/${type}/${id}?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US`
  
const [data, setData] = useState(null)
const [video, setVideo] = useState(null)
const {type} =GlobalContext();

const fetchData= async()=>{
  

  const url=`https://api.themoviedb.org/3/${type}/${id}?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US`
  console.log(url)
  const ans= await axios.get(url);
  setData(ans.data);

  console.log(ans.data)
}


const fetchVideo = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US`
  );
  setVideo(data.results[0]?.key);
  }

useEffect(() => {


    fetchData();
     fetchVideo();
   

}, [])// eslint-disable-line react-hooks/exhaustive-deps



  return(data? (
  <div className="outer ">
    <div className='modalContainer'>
      {console.log(data)}
     <div className='imgContainer'>
       <img className='bgGlow' src={data.poster_path?`https://image.tmdb.org/t/p/w300${data.poster_path}`: "https://www.movienewz.com/img/films/poster-holder.jpg"} alt="" />
     </div>

     <div className="bgGlow bg">
     <div className="contentContainer">
       <div className=" whiteText modalTitle">
       {data.name || data.title} (
                    {(
                      data.first_air_date ||
                      data.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
       </div>

       {data.tagline && (
                    <div className="tagline">{data.tagline}</div>
                  )}

       <div className="overviewContainer">
       <div className="modalOverview ">
         {data.overview}
         
       </div>
       <div className='corousel'>
   <Corousel id={id} media_type={type} />

   </div>


   <Button       
                    style={{background:"red" , marginTop:"1.5rem" , width:"90%" , fontSize:"0.95rem"}}
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    sx={{ "&:hover": { color: "wheat" , opacity:"0.95" } }}
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>

       </div>

     </div>

   
                 
    </div>
    

    </div>
    </div>
  ):<></>)

 
}

export default Individual