import React from "react";
import EduTwo from "../assets/EduTwo.png";
import PVss from "../assets/PVss.png";
import VSim from "../assets/VSim.png"
import KWA from "../assets/KWA.png";
import OWC from "../assets/OWC.png";
import CC from "../assets/CC.png"


const Projects = () => {
  const projects = [
    {
      img: EduTwo,
      title: "EduTwo",
      desc: "  Decentralized application for Academic credentials ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/stepankriminskiy/EduBlockchain",
    },
    {
      img: PVss,
      title: "PVss",
      desc: "  Dijikstras Visual Pathfinder ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/SafiShahid34/VisualPathfinder",
    },
    {
      img: VSim,
      title: "VSim",
      desc: "  Virus Simulation Staticstics with graphical representation ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/SafiShahid34/VirusSim",
    },
    {
      img: KWA,
      title: "KWA",
      desc: "  Weather react app using OpenWeather API ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/SafiShahid34/React-Kelvin-Weather",
    },
    {
      img: OWC,
      title: "OWC",
      desc: "  Online Chat Application using MySQL ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/SafiShahid34/OnlineWebChat",
    },
    {
      img: CC,
      title: "CC",
      desc: "  Calorie Counter in JS ",
      live: "https://edublockchain.netlify.app/",
      code: "https://github.com/SafiShahid34/CalCounter",
    },
    
  ];

  return (
    <section className="bg-primary text-white px-5 py-16" id="projects">
      <div className="container grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5 ">
            These are some projects
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative " key={i}>
              <img src={project.img} alt={project.title} className="w-full h-52 object-cover rounded-lg"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;