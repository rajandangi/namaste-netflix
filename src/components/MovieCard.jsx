import { IMAGE_BASE_URL } from "../utils/constants"
import propTypes from "prop-types"

const MovieCard = ({ backdrop_path }) => {
    return (
        <div className="flex-[0_0_calc(16.666%-1rem)] transition-transform hover:scale-105">
            <img src={IMAGE_BASE_URL + backdrop_path} alt="movie poster" className="rounded" />
        </div>
    )
}


MovieCard.propTypes = {
    backdrop_path: propTypes.string.isRequired
}

export default MovieCard