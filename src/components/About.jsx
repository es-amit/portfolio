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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis id
          error repellat ea voluptatum, laborum qui molestias sint eaque sed, ut
          beatae omnis? Minima beatae illo facere ex, ullam voluptatem non quis
          necessitatibus repellat quo adipisci, possimus illum deleniti aperiam
          velit doloribus rerum, delectus fugit nostrum rem ut molestias
          voluptatum?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          ratione inventore animi sint aliquam numquam tempora, harum et quod
          nisi, eligendi, magni dignissimos quia quidem alias accusantium
          molestias saepe ab error! Repudiandae provident consectetur iusto
          corrupti et vero, ullam cupiditate quaerat dolor, praesentium atque
          nesciunt optio deleniti aperiam, aut officia.
        </p>
      </div>
    </div>
  );
};
export default About;
