/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="flex container h-screen flex-col bg-bgcolor w-full px-12 py-4">
      <h2 className="text-center items-center text-2xl text-uscgold">Contact Me</h2>

      <div className="flex flex-col-2">
        <div className="flex flex-col justify-center space-y-2 shadow-md mx-auto px-6 py-2">
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-lg p-4 m-4 bg-transparent text-uscgold">
            <FaLocationDot className='text-xl'/>
            <span>Location</span>
            <span>Nairobi, Nyeri Kenya</span>
            <span>Remote, ready to relocate</span>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-lg p-4 m-4 bg-transparent text-uscgold">
            <FaEnvelope className='text-xl'/>
            <span>Email</span>
            <span>josephwachira589@gmail.com</span>
            <span>wachirawahome81@gmail.com</span>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-xl shadow-lg p-4 m-4 bg-transparent text-uscgold">
            <FaPhone className='text-xl'/>
            <span>Phone</span>
            <span>(254)0795969757</span>
          </div>
        </div>

       {/* contact form */}
        <form className="flex flex-col py-4 space-y-6 shadow-md text-uscgold w-1/2 mx-auto">
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Full Name"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Email Address"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Phone Number"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />
          <input
            type="text"
            autoComplete="off"
            autoSave="off"
            placeholder="Subject"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
          />

          <textarea
            name="message"
            id="message"
            className="bg-#fffff px-4 p-2 rounded-md shadow-sm border-2 border-uscgold bg-transparent focus:border-uscgold focus:ring-0"
            placeholder="Message...">
          </textarea>

          <button className="w-38 h-12 bg-gold text-bgcolor text-2xl rounded-md hover:bg-gpoppy">Submit</button>
        </form>
      </div>
    </div>
  );
}
