import React from "react";
import { Link } from "react-scroll";
import HeroImage from "../assets/profile-pic-9.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
  const [text] = useTypewriter({
    words: ["Flutter Developer", "Competitive Programmer"],
    loop: true,
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          {/* <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Flutter Developer
          </h2> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            I'm a{" "}
            <span className="text-2xl font-bold text-cyan-500">{text}</span>
            <span>
              <Cursor />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 months of experience building and desgining mobile
            application. Currently, I love to work on mobile application using
            technologies like Flutter, Firebase, Node JS and Express.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl hover:scale-105 duration-300 mx-auto md:w-1/2 sm: w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
