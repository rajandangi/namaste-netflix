import { useSelector } from "react-redux"
import MovieList from "@/components/MovieList"
import lang from "@/utils/i18n"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    const selectedLang = useSelector((store) => store.config.lang);

    return (
        <div className="bg-[#141414] text-white">
           <div className="relative -mt-45 z-20 grid gap-10">
                <MovieList title={lang[selectedLang].nowPlaying} movies={movies.nowPlaying} />
                <MovieList title={lang[selectedLang].popular} movies={movies.popular} />
                <MovieList title={lang[selectedLang].topRated} movies={movies.topRated} />
                <MovieList title={lang[selectedLang].newOnNetflix} movies={movies.nowPlaying} />
                <MovieList title={lang[selectedLang].actionMovies} movies={movies.nowPlaying} />
           </div>
        </div>
    )
}

export default SecondaryContainer