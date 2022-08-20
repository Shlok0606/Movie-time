import  Chip  from '@mui/material/Chip';
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  option,
  setOption,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setOption(option.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setOption([...option, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=52bfcae0dc91f5f46cb967987f36523a&language=en-US`
    );
    setOption(data.genres);
  };

  useEffect(() => {
    
    console.log(type);
    fetchGenres();

    return () => {
      setOption({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre}
          key={1}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {option.map((genre) => (
       <>
          {console.log(genre)}
      <Chip
      style={{ margin: 2 }}
      label={genre.name}
      key={genre.id}
      color="primary"
      clickable
      size="small"
      onDelete={() => handleAdd(genre)}
    />
    </>
      ))}
    </div>
  );
};

export default Genres;