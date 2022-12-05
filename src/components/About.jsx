import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold font-montserrat inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl font-lexend mt-20">
          I have a passion for developing web applications and having hands-on
          experience in ASP .Net core, ASP .Net, .Net MVC in back-end
          technologies and HTML, CSS, Bootstrap, Tailwind css and React js in
          front-end technologies.
        </p>

        <br />

        <p className="text-xl font-lexend">
          I have the ability to produce quality output even in fast turn-around
          time. Quick grasper of new technologies and adpotation to different
          domain and different techs.
        </p>
      </div>
    </div>
  );
};

export default About;
