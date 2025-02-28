import VideoBackground from "@/components/UI/VideoBackground"
import VideoTitle from "@/components/UI/VideoTitle"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import ShimmerUI from "@/components/UI/ShimmerUI"

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlaying);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (movies) {
            // Set a small delay to allow thge videobackground to load
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    })

    if (!movies) return;

    const mainMovie = movies[0];
    const { id, original_title, overview } = mainMovie;

    return (
        <div className="relative">
            {loading ? (<ShimmerUI />) : (
                <>
                    <VideoTitle title={original_title} overview={overview} />
                    <VideoBackground movie_id={id} />
                </>
            )
            }
        </div>
    )
}

export default MainContainer