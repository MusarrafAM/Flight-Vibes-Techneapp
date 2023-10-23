import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-100% h-[50px] bg-blue-100 flex justify-between">
      <section className="ml-4">Image FlightVibes</section>
      <ul className="flex gap-8 justify-center items-center">
        <li>Flights</li>
        <li>Hotels</li>
        <li>Promotions</li>
        <li>Help</li>
        <li>Sign in</li>
      </ul>
      <section className="right-side my-auto flex gap-4 mr-4">
        <button className="bg-purple-400 rounded-full">
          <BsSun size={40} className="text-gray-300 p-2"/>
        </button>
        <button className="border-2 border-black px-4">Book A Flight</button>
        <button>
          <GiHamburgerMenu size={30}/>
        </button>
      </section>
    </div>
  );
};

export default Navbar;
