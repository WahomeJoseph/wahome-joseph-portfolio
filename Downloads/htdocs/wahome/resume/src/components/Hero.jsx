/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaAnglesDown, FaXTwitter } from "react-icons/fa6";

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const navigate= useNavigate();

  const handleShow = () => {
    setShowMore(!showMore);
    navigate("/about");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-bgcolor  text-txtcolor">
      <nav id="navbar" className="w-full p-6 bg-transparent bg-opacity-90 shadow-customglow z-10 fixed top-0 border-b-2 border-b-gpoppy rounded-b-sm">
        <ul className="flex flex-row items-center justify-center gap-6 p-6">
          <li className="text-2xl hover:text-underline-gpoppy">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl hover:text-underline-gpoppy">
            <Link to="/about">About Me</Link>
          </li>
          <li className="text-2xl hover:text-underline-gpoppy">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="text-2xl hover:text-underline-gpoppy">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-2xl hover:text-underline-gpoppy">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col bg-cover bg-center bg-no-repeat items-center justify-center w-full h-full ">
        <p className="text-center text-2xl font-semibold text-txtcolor p-4 ">
          <span>Hello I&apos;m</span> <br />
          <span className="text-2xl text-gpoppy">Joseph Wachira</span> <br />
          <span className="text-txtcolor">a Software Developer</span>
        </p>

        <div className="flex flex-row items-center justify-between gap-6 m-8">
          <button className="w-46 h-12 text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
            Download Resume
          </button>
          <Link to="/contact">
            <button className="w-46 h-12 text-xl font-semibold px-4 py-2 rounded-md shadow-md hover:bg-hgold hover:shadow-lg transition duration-300 bg-gbrown text-bgcolor">
              Hire Me
            </button>
          </Link>
        </div>

        {showMore && (
          <p className="text-uscgold text-xl text-center">Read More</p>
        )}

        <button onClick={handleShow}>
          <FaAnglesDown className="text-xl text-uscgold hover:text-gpoppy transition duration-300" />
          {showMore ? "Show Less" : "Show More"}
        </button>

        <ul className="flex flex-row items-center justify-center space-x-6 mt-4 mb-0">
          <a
            href="https://github.com/WahomeJoseph"
            className="text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-wachira-202a7023"
            className="text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://mail.google.com/mail/"
            className="text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/sayjo.e?igshid=YzljYTk1ODg3Zg=="
            className="text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/WachiraJoseph17?t=KGERM4FElIAFfhTfLpCMyw&s=09"
            className="text-2xl text-white hover:text-uscgold transition duration-300"
          >
            <FaXTwitter />
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
