import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "@/utils/constants";
import { addPopular } from "@/redux/slices/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popular);

  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopular(data.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;