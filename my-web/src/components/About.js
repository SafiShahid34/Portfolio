import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-16" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info ml-12 ">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Safi Shahid I am a Full Stack Developer in New York. 
            During my pursuits in computer science, i have developed a strong admiration for web technologies
            Most notably in React and Node.js.
          </p>
          <p className="pb-5">
            <p className="font-bold">Languages/Tools:</p> <br></br>
          	React, Angular, Node.js, SQL, PHP,  Javascript, Typescript, Python, Java, Scala, C/ C++, JQuery,
Django, MongoDB, R, .Net, Go, Kotlin, GraphQL, Vue.js, Spring Boot

<p className="font-bold"></p> <br></br>
            Docker, BootStrap, Git, MySQL, Visio, JIRA, Oracle, Excel, AWS, Firebase, Tabuleu

          </p>


          <p className="pb-5">
            <p className="font-bold">Experience:</p><br></br>
            <p>The Ticketing Co. </p>
            <p>Software Engineer Intern</p>
            <p>2023</p>
          </p>

          <p >
            <p className="font-bold">Education:</p><br></br>
            <p>University at Buffalo, The State University of New York, Computer Science		
            <p>Buffalo, NY, May 2024</p>
          </p>



            
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="w-[60%] md:ml-auto mr-12"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
