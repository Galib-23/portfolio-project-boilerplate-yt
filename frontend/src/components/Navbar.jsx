import { useState } from "react";
import meowImg from "../assets/youtubeprofile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-14 bg-gray-300 fixed opacity-90 z-10 mx-auto flex justify-center items-center">
      <div className="flex justify-between items-center  w-full md:max-w-5xl relative">
        <Link to="/">
          <h2 className="text-xl font-bold hover:text-orange-400 transition">
            Meow The Dev
          </h2>
        </Link>
        <img
          src={meowImg}
          alt="meow"
          className="h-10 rounded-full object-contain hover:shadow-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute right-0 top-12 bg-white w-40 rounded-md shadow-md">
            <ul className="py-1 text-sm text-gray-700">
              <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                Profile
              </li>
              <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                Settings
              </li>
              <Link to='/dashboard'>
                <li className="hover:bg-cyan-100 px-4 py-2 cursor-pointer">
                  Dashboard
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
