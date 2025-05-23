import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("Top Rated Movies:", movies.topRatedMovies);
  console.log("Upcoming Movies:", movies.upcomingMovies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-32 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
        {/*
        MovieList - Popular
            MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror 
        */}
      </div>
    )
  );
};

export default SecondaryContainer;
