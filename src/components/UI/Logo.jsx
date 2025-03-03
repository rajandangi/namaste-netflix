import { IMAGES } from "@/utils/constants";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img className="w-24 mg:w-34" src={IMAGES.LOGO} alt="Netflix Logo" />
      </Link>
    </div>
  );
};

export default Logo;
