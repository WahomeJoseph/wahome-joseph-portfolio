/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col container h-screen bg-bgcolor justify-between items-center p-6">
      <h2 className="text-xl text-uscgold font-semibold text-center">
        My Works
      </h2>

      <div className="grid grid-cols-2 items-center justify-center w-full bg-transparent gap-6 p-8">
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-10 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl text-center text-uscgold" />
          <span className="text-xl font-semibold">
            Dental Clinic Management System
          </span>
          <img src="" alt="" />
          <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quaerat?</p>
          <button className="w-44 h-10 bg-gold text-bgcolor text-xl rounded-md hover:bg-gpoppy">
            View More
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-10 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl text-center text-uscgold" />
          <span className="text-xl font-semibold">Booking System</span>
          <img src="" alt="" />
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            quaerat?
          </p>
          <button className="w-44 h-10 bg-gold text-bgcolor text-xl rounded-md hover:bg-gpoppy">
            View More
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-10 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl text-center text-uscgold" />
          <span className="text-xl font-semibold">Farm Management System</span>
          <img src="" alt="" />
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            quaerat?
          </p>
          <button className="w-44 h-10 bg-gold text-bgcolor text-xl rounded-md hover:bg-gpoppy">
            View More
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-md shadow-lg border-b-2 border-b-uscgold px-10 py-4 bg-transparent text-txtcolor">
          <FaCode className="text-xl text-center text-uscgold" />
          <span className="text-xl font-semibold">E-commerce System</span>
          <img src="" alt="" />
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            quaerat?
          </p>
          <button className="w-44 h-10 bg-gold text-bgcolor text-xl rounded-md hover:bg-gpoppy">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
