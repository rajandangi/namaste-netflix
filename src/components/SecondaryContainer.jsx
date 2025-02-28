import { useSelector } from "react-redux"
import MovieList from "@/components/MovieList"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-[#141414] text-white">
           <div className="relative -mt-45 z-20 grid gap-10">
                <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
                <MovieList title={"Popular Movies"} movies={movies.popular} />
                <MovieList title={"Today's Top Picks for you"} movies={movies.topRated} />
                <MovieList title={"New On Netflix"} movies={movies.nowPlaying} />
                <MovieList title={"Action Movies"} movies={movies.nowPlaying} />
           </div>
        </div>
    )
}

export default SecondaryContainer