import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, user } = useAuth0();

  return (
    <header className="relative z-10 py-15 w-full flex items-center px-4 sm:px-12">
      <Link
        to="/"
        className="flex items-center gap-3 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"
      >
        <img src={LOGO} alt="logo" className="h-10 w-13" />
        <h1 className="text-white text-lg md:text-2xl font-semibold">
          Weather App
        </h1>
      </Link>

      {user && (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="ml-auto text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white px-5 py-2.5"
        >
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
