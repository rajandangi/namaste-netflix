import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularMovies from "@/hooks/usePopularMovies";
import useTopRatedMovies from "@/hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse