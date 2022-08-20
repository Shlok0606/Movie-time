import {
  Button,
  createTheme,
  Tab,
  Tabs,

  ThemeProvider,
} from "@mui/material";
import "../Styles/Search.css";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import Subhead from "./Subhead";
import CustomPagination from "../Pagination/pagination";
import Header from '../Components/Header';
// import '../Styles/Movies.css'
//import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "./SingleComponent";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [content, setContent] = useState([]);


  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const res=await fetch(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
    const ans=await res.json();
      setContent(ans.results);
      setNumOfPages(ans.total_pages<500?ans.total_pages:500);
      //setNumOfPages(data.total_pages);
    // console.log(ans);
    
  };

  useEffect(() => {
    window.scroll(0, 0);
    if(searchText){
    fetchSearch();
    }
    // eslint-disable-next-line
  }, [type, page, searchText]);

  const handleSearch=(e)=>{
    e.preventDefault();
   setSearchText(e.target.value)
   
  }



  
  return (
    <div className="searchContainer">
       <Header></Header>
        <Subhead data="Search"></Subhead>
     
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <input placeholder="Enter Input Here" onChange={handleSearch}></input>
          
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginRight: "3rem" , color:"#5271ff" }}
          >
            <SearchIcon fontSize="large"  />
          </Button>
        </div>

        <div className="searchOption">
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }
        }
          style={{ paddingBottom: 5  , backgroundColor:"#5271ff"}}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%", fontWeight:"bold" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
        </div>
      </ThemeProvider>
      <div className="cardGrid">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {searchText  && (
        <CustomPagination color="secondary" setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;