import netflixLogo from "@/assets/Netflix_Logo_CMYK.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-34" src={netflixLogo} alt="Netflix Logo" />
    </div>
  );
};

export default Logo;
