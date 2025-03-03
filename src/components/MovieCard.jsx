import { IMAGE_BASE_URL } from "../utils/constants"
import propTypes from "prop-types"

const MovieCard = ({ poster_path }) => {
    if (!poster_path) return null;

    return (
        <div className="max-h-50 lg:max-h-82 flex-[0_0_calc(36%-2rem)] sm:flex-[0_0_calc(26%-2rem)] md:flex-[0_0_calc(16.66%-2rem)] lg:flex-[0_0_calc(16.666%-2rem)] transition-transform hover:scale-105 shadow-md">
            <img src={IMAGE_BASE_URL + poster_path} alt="movie poster" className="rounded h-full object-cover" />
        </div>
    )
}


MovieCard.propTypes = {
    poster_path: propTypes.string.isRequired
}

export default MovieCard