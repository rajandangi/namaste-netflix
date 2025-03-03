import MagnifyingGlass from "@/components/icons/MagnifyingGlass";
import lang from "@/utils/i18n";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completion } from "@/utils/deekSeek";
import { API_OPTIONS } from "@/utils/constants";
import { addGptMovies } from "@/redux/slices/gptSlice";
import Loading from "@/components/UI/Loading";

const GptSearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const selectedLang = useSelector((store) => store.config.lang);
  const searchTerm = useRef(null);
  const dispatch = useDispatch();

  const getTMDBMovie = async (gptArray) => {
    const moviePromises = gptArray.map(async (movie) => {
      const movieRes = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
      const movieData = await movieRes.json();
      return movieData.results;
    });

    // Wait for all promises to resolve
    const movies = await Promise.all(moviePromises);
    dispatch(addGptMovies({ gptMoviesNames: gptArray, gptMovies: movies }));
  }

  const handleGPTSearch = async () => {
    try {
      // Prevent multiple clicks
      if (loading) return;

      // Set loading state
      setLoading(true);

      // Get recommended movies from GPT
      const recommendedMovies = await completion(searchTerm.current.value);

      // Convert the comma-separated string into an array of movie titles and trim any extra spaces
      const formattedResult = recommendedMovies.split(",").map(movie => movie.trim());

      // Search each movie into TMDB API
      getTMDBMovie(formattedResult);

      // Reset loading state
      setLoading(false);
    } catch {
      setLoading(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 10000);
    }

  }

  return (
    <div className="text-white max-w-lg mx-auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlass />
          </div>
          <input
            ref={searchTerm}
            type="search" id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={lang[selectedLang].gptSearchPlaceholder} required
          />

          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            onClick={handleGPTSearch}
            disabled={loading}
          >
            {lang[selectedLang].search}
          </button>
        </div>
      </form>
      <div className="mt-4">
        {loading && <Loading message="Please wait to get the result from deekseek API" messageClass="text-white" />}
      </div>
      {showError && (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">API Error!</span> An error occurred while fetching the data. Please set Deepseek API key.
        </div>
      )}
    </div>
  )
}

export default GptSearchInput;