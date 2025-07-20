import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";

const Header = () => {
  return (
    <Link to='/' className="relative z-10 py-15">
      <div className="flex items-end-safe justify-center-safe gap-5">
        <img src={LOGO} alt="logo" className="h-10 w-13" />
        <h1 className="text-white text-2xl font-semibold">Weather App</h1>
      </div>
    </Link>
  );
};

export default Header;
