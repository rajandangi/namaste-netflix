import GptMovieSuggestions from "@/components/GptMovieSuggestions"
import GptSearchInput from "@/components/GptSearchInput"
import { IMAGES } from "@/utils/constants"

const GptSearch = () => {
  return (
    <>
      <div className="pt-24 w-full h-[50vh] bg-center bg-cover p-4" style={{ backgroundImage: `url(${IMAGES.BACKGROUND})` }}>
        <div >
          <GptSearchInput />
        </div>
      </div>
      <GptMovieSuggestions />
    </>
  )
}

export default GptSearch