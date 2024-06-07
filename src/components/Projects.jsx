import React from "react";
import chat_jet from "../assets/projects/chat_jet.png";
import instant_gram from "../assets/projects/instant-gram.png";
import typeracer from "../assets/projects/typeracer.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: instant_gram,
      code: "https://github.com/es-amit/Instagram-Clone",
    },
    {
      id: 2,
      src: chat_jet,
      code: "https://github.com/es-amit/Chat-Jet",
    },
    {
      id: 3,
      src: typeracer,
      code: "https://github.com/es-amit/Typeracer",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => {
                    console.log("Demo button clicked");
                    // Add your logic here
                  }}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => {
                    window.open(code, "_blank");
                  }}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
