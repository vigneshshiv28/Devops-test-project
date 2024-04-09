import React, { useState, useEffect } from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/details") // Replace with your Flask backend URL and endpoint
      .then((response) => response.json())
      .then((data) => setName(data.name))
      .catch((error) => console.error("Error fetching name:", error));
  }, []);

  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">{name}</span>{" "}
            <br />
            Frontend Developer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          
          <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
          </div>
          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 /*
        
        */