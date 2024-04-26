import axios from 'axios'

import React, { useEffect, useState } from 'react'
import CustomPagination from '../../Pagination/CustomPagination';
import "./Movies.css";
import SingleContent from '../SingleContent/SingleContent';
import config from '../config'


const Movies = () => {
  const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] =useState([])
  const fetchMovies = async () => {
    
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=54e1011a58a79e51ef06ff88c180a6d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [ page]);


  return (
    <div style={{ backgroundColor: '#2d313a' }}>
            <h1 style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', margin: '20px 0' }}>🎬 Discover Movies 🎥</h1>
      <div className="movies">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
  
}

export default Movies