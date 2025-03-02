import GptMovieSuggestions from "@/components/GptMovieSuggestions"
import GptSearchInput from "@/components/GptSearchInput"
import { IMAGES } from "@/utils/constants"

const GptSearch = () => {
  return (
    <div className="pt-24 w-full h-screen bg-center bg-cover" 
      style={{ backgroundImage: `url(${IMAGES.BACKGROUND})` }}>
      <GptSearchInput />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch