import { useSelector } from "react-redux"
import MovieList from "@/components/MovieList"

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies)
  const gptMoviesNames = useSelector((store) => store.gpt.gptMoviesNames)

  return gptMoviesNames && gptMovies && (
    <div className="text-white bg-gray-900 p-4 rounded">
      <div className="relative -mt-45 z-20 grid gap-10">
        {
          gptMoviesNames.map((name,index) => (
            <MovieList key={index} title={name} movies={gptMovies[index]} />
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions