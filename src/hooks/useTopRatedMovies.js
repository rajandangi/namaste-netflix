import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "@/utils/constants";
import { topRated } from "@/redux/slices/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRated);

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(topRated(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;