import { Link } from 'react-router-dom';
import bgimg from '../assets/backgrnd.jpg';
import newlogo from "../assets/newLogo.svg";
import logo from "../assets/logo.svg";

export const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div
        className="relative flex items-center justify-center min-h-[90vh] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        {/* Removed dark overlay */}

        <div className="relative m-4 flex flex-col items-center text-center max-w-4xl">
          <h1 className="font-AlluraRegular text-black text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Connect with the Modern World
          </h1>
          <p className="mt-4 text-black font-baskervvilleRegular text-lg md:text-2xl lg:text-3xl font-medium">
            Insights, stories, and ideas for everyone
          </p>

          <Link to="/signup">
            <button
              type="button"
              className="mt-6 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-6 py-3 transition-colors duration-300"
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="fixed z-50 bg-white/90 backdrop-blur border-b border-gray-200 flex justify-between items-center px-6 py-3 w-full shadow-sm">
      <div className="flex items-center">
        <img className="w-9" src={newlogo} alt="Logo icon" />
        <img className="p-1 w-32 md:w-36" src={logo} alt="Logo text" />
      </div>

      <div className="flex items-center gap-4">
        <Link to="/signin">
          <button
            type="button"
            className="text-black border border-gray-800 font-semibold rounded-xl text-sm px-5 py-2 transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 focus:ring-4 focus:ring-gray-300"
          >
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button
            type="button"
            className="hidden lg:inline-block text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-6 py-2 transition"
          >
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};
