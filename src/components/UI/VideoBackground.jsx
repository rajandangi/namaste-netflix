import useMovieTrailor from '@/hooks/useMovieTrailor';
import { useSelector } from 'react-redux';

const VideoBackground = (movie_id) => {
    useMovieTrailor(movie_id);
    const trailorKey = useSelector((store) => store.movies.trailorKey);
    if (!trailorKey) return;

    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${trailorKey}?autoplay=1&controls=0&mute=1&loop=1&playlist=${trailorKey}`}
                className='w-full h-screen'
            />
        </div>
    )
}

export default VideoBackground