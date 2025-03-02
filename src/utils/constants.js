// import images
import bgImage from "@/assets/large-bg-image.jpg";
import netflixLogo from "@/assets/Netflix_Logo_CMYK.png";
import profileImage from "@/assets/netflix-profile-pictures.jpg";

export const IMAGES = {
  BACKGROUND: bgImage,
  LOGO: netflixLogo,
  PROFILE: profileImage,
};

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};


export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

