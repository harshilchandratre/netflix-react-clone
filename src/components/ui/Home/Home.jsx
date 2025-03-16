import React, { useEffect, useState } from "react";
import Carousel from "../../shared/Carousel/Carousel";
// import Card from '../../shared/Card/Card'
import Row from "../../shared/Row/Row";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY || "0c901f88f70749decde4a1ace1c27b56";
const url = "https://api.themoviedb.org/3/movie/";

const Home = () => {
  const [popularResults, setPopularResults] = useState([]);
  const [topRatedResults, setTopRatedResults] = useState([]);
  const [nowPlayingResults, setNowPlayingResults] = useState([]);
  const [upcomingResults, setUpcomingResults] = useState([]);
  useEffect(() => {
    const fetchMovies = async (type, setter) => {
      try {
        const response = await axios.get(
          `${url}${type}?api_key=${apiKey}&language=en-US&include_adult=true`
        );
        console.log(`${type} response:`, response.data); 
        setter(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies("popular", setPopularResults);
    fetchMovies("top_rated", setTopRatedResults);
    fetchMovies("now_playing", setNowPlayingResults);
    fetchMovies("upcoming", setUpcomingResults);
  }, []);

  return (
    <div className="container">
      <Carousel movie={nowPlayingResults}/>
      <Row title={"Now Playing"} results={nowPlayingResults} />
      <Row title={"Popular"} results={popularResults} />
      <Row title={"Top Rated"} results={topRatedResults} />
      <Row title={"Upcoming"} results={upcomingResults} />
    </div>
  );
};

export default Home;
