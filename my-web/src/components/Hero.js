import React from "react";
import Me from "../assets/Me.JPG";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0 ml-12">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">S</span>afi <br />
            Software Developer
          </h1>

          <p className="py-5">
            Proficient in React.js, Node.js, Python, Java and more 
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/safi-shahid/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/SafiShahid34"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img ">
          <img
            src={Me}
            alt="coding illustration"
            className="w-[60%] ml-auto mr-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
