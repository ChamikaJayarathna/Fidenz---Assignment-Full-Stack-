import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, user } = useAuth0();

  return (
    <header className="relative z-10 py-15 w-full flex justify-between px-12">
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex items-end-safe justify-center-safe gap-5">
          <img src={LOGO} alt="logo" className="h-10 w-13" />
          <h1 className="text-white text-2xl font-semibold">Weather App</h1>
        </div>
      </Link>

      {user && (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white ml-auto cursor-pointer"
        >
          <span className="relative px-5 py-2.5">
            Logout
          </span>
        </button>
      )}
    </header>
  );
};

export default Header;

