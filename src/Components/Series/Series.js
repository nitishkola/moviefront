import React, { useState, useEffect } from "react";
import "./Series.css";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/CustomPagination";
import axios from "axios";


const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSeries = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=54e1011a58a79e51ef06ff88c180a6d3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSeries();
    }, [page]);

    return (
        <div className="seriesContainer">
                  <h1 style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', margin: '20px 0' }}>🎬 Discover Series 🎥</h1>
            <div className="tv">
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
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    );
};

export default Series;
