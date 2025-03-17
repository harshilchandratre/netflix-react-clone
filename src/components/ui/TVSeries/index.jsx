import React, { useEffect, useState } from "react";
import Carousel from "../../shared/Carousel/Carousel";
// import Card from '../../shared/Card/Card'
import Row from "../../shared/Row/Row";
import axios from "axios";
import LoadingScreen from "../../shared/LoadingScreen/LoadingScreen";

const apiKey =
  import.meta.env.VITE_API_KEY || "0c901f88f70749decde4a1ace1c27b56";
const url = "https://api.themoviedb.org/3/tv/";

// https://api.themoviedb.org/3/tv/popular?api_key=0c901f88f70749decde4a1ace1c27b56&language=en-US

const TVSeries = () => {    
  const [popularTVResults, setPopularTVResults] = useState([]);
  const [topRatedTVResults, setTopRatedTVResults] = useState([]);
  const [airingTodayResults, setAiringTodayResults] = useState([]);
  const [OnTheAirResults, setOnTheAirResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async (type, setter) => {
      try {
        const response = await axios.get(
          `${url}${type}?api_key=${apiKey}&language=en-US&include_adult=true&sort_by=popularity.desc`
        );
        console.log(`${type} response:`, response.data);
        // console.log(response.data.results);
        setter(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllTVSeries = async () => {
      await Promise.all([
        fetchMovies("popular", setPopularTVResults),
        fetchMovies("top_rated", setTopRatedTVResults),
        fetchMovies("airing_today", setAiringTodayResults),
        fetchMovies("on_the_air", setOnTheAirResults),
      ]);

      setLoading(false);
    };

    fetchAllTVSeries();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="container">
      <Carousel movie={airingTodayResults} />   
      <Row title={"Airing Today"} results={airingTodayResults} />
      <Row title={"On The Air"} results={OnTheAirResults} />
      <Row title={"Popular"} results={popularTVResults} />
      <Row title={"Top Rated"} results={topRatedTVResults} />
    </div>
  );
};

export default TVSeries;
