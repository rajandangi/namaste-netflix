import { IMAGES } from "@/utils/constants";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className="w-34" src={IMAGES.LOGO} alt="Netflix Logo" />
    </div>
  );
};

export default Logo;
