import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import SecondaryContainer from "@/components/SecondaryContainer";
import GptSearch from "@/components/GptSearch";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import usePopularMovies from "@/hooks/usePopularMovies";
import useTopRatedMovies from "@/hooks/useTopRatedMovies";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse