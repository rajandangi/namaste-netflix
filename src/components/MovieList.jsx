import MovieCard from "@/components/MovieCard"
import propTypes from "prop-types"
import Loading from "@/components/UI/Loading";
import ChevronRight from "@/components/icons/ChevronRight";
import { useRef } from "react";
import ChevronLeft from "@/components/icons/ChevronLeft";

const MovieList = ({ title, movies }) => {
    const scrollContainerRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        }
    };
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        }
    }

    return (!movies || movies.length === 0) ? <Loading /> : (
        <div className="pl-10">
            <div className="space-y-4 group">
                <h1 className="text-2xl font-medium">{title}</h1>
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-scroll pr-15 scrollbar-hide relative"
                    >
                        {movies.map((movie) => (<MovieCard key={movie.id} {...movie} />))}
                    </div>
                    
                    <div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 p-2 rounded-full"
                        onClick={handleScrollLeft}
                    >
                        <ChevronLeft />
                    </div>

                    <div
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 p-2 rounded-full"
                        onClick={handleScrollRight}
                    >
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

MovieList.propTypes = {
    title: propTypes.string.isRequired,
    movies: propTypes.array.isRequired
}

export default MovieList