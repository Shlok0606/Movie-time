
import { useEffect, useState } from "react";

import SingleContent from "../Components/SingleComponent";
import useGenre from "../Hooks/useGenre";
import  Chip  from '@mui/material/Chip';
import Subhead from "./Subhead";
import '../Styles/Movies.css'
import CustomPagination from "../Pagination/pagination";

import Header from '../Components/Header';
 
const TVSeries = () => {
  const [option, setoption] = useState([]);
  const [selectedoption, setSelectedoption] = useState([]);

  const [content, setContent] = useState([]);

  const genreforURL = useGenre(selectedoption);

  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();



  const fetchMovies = async () => {
 //   console.log(genreforURL);
    const res=await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    const ans=await res.json();
    setContent(ans.results);
    setNumOfPages(ans.total_pages<500?ans.total_pages:500);
  //  console.log(ans.total_pages)
   
  };

  useEffect(() => {
  
    fetchMovies();
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, [genreforURL,page]);



const handleAdd = (genre) => {
  setSelectedoption([...selectedoption, genre]);
  setoption(option.filter((g) => g.id !== genre.id));
  setPage(1);
 
};

const handleRemove = (genre) => {
  setSelectedoption(
    selectedoption.filter((selected) => selected.id !== genre.id)
  );
  setoption([...option, genre]);
  setPage(1);

};


const fetchoption = async () => {
  const res=await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US`);
  const ans=await res.json();
  
  setoption(ans.genres);

};


useEffect(() => {
    

  fetchoption();

 
  // eslint-disable-next-line
}, []);





  return (
    <div>
       <Header></Header>
      <div className="paginationContainer">
 
</div>
      <Subhead data="TV Series"></Subhead>
      
      <div style={{ padding: "6px 0" }}>
      {selectedoption.map((genre) => (
        <>
       
        <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
        />
        </>
      ))}


      {option.map((genre) => (
       <>
        
      <Chip
       style={{ marginRight: 8 , marginBottom:7 }}
       label={genre.name}
       color="primary"
       key={genre.id}
       clickable
       size="small"
       onClick={() => handleAdd(genre)}
    />
    </>
      ))}
    </div>

      <div className="cardGrid">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      
      {numOfPages > 1 && (
        <CustomPagination color="secondary" setPage={setPage} numOfPages={numOfPages} />
      )}

    </div>
  );
};

export default TVSeries;