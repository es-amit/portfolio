import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          "Hello! I'm Amit Singh, a passionate Flutter developer currently
          pursuing BCA (Bachelor of Computer Applications) and specializing in
          Android development. With a strong foundation in Dart, Flutter, and
          Firebase, I have honed my skills in various state management tools
          like BLoC, Riverpod, Provider and GetX to build dynamic and
          interactive Android / iOS applications. I thrive on the challenge of
          crafting intuitive user experiences and bringing designs to life with
          clean and efficient code. My goal is to create engaging and visually
          appealing applications that seamlessly blend functionality and
          aesthetics. By staying up-to-date with the latest industry trends and
          continuously expanding my knowledge.
        </p>
        <br />
        <p className="text-xl">
          Through this website, I hope to share my knowledge and insights with
          others in the programming community and inspire others to pursue their
          passions in technologies. I am always open to new opportunities and
          collaborations, so feel free to reach out to me if you have any
          questions or would like to work together. I look forward to connecting
          with you and exploring the endless possibilities of technology
          together. Thank you for visiting my website and taking the time to
          learn more about me. I hope you enjoy your stay and find the
          information here helpful and inspiring. Let's create amazing things
          together and make a positive impact on the world through the power of
          technology! 😊🚀✨
        </p>
      </div>
    </div>
  );
};
export default About;
