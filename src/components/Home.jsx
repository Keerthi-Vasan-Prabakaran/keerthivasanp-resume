import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-montserrat underline underline-offset-8 font-semibold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 font-lexend py-4 max-w-md">
            I have 8 months of experience in building web application using Dot
            Net core and React.
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 cursor-pointer hover:scale-110 duration-300"
            >
              Contact
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
            className="rounded-3xl mx-auto w-2/3 md:w-full hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
