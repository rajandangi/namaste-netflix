import { useEffect } from "react";
import { API_OPTIONS } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorKey } from "@/redux/slices/movieSlice";

const useMovieTrailor = ({ movie_id }) => {
  const dispatch = useDispatch();
  const trailorKey = useSelector((store) => store.movies.trailorKey);

  // Fetch movie trailer from TMDB API and update Redux Store
  const getMovieTailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();

    // find() method returns the first element that satisfies the condition.
    const tailor =
      data.results.find((video) => video.type === "Trailer") || data.results[0];

      // dispatch the key to redux store
    dispatch(addTrailorKey(tailor?.key));
  };

  useEffect(() => {
    !trailorKey && getMovieTailer();
  }, []);
};

export default useMovieTrailor;
