import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen relative overflow-x-clip">
      <Navbar />
      <div className="firstvirtical-bar w-[300px] h-[79%] bg-red-300 absolute right-[-5%] skew-x-[-15deg] z-50 "></div>
      <div className="secondvertical-bar w-[260px] h-[500px] bg-red-600 absolute right-[10%] bottom-[-30px] skew-x-[-15deg] z-40 border-4  border-white"></div>
      <div className="Bottom_Gradient_Line w-full h-[100px] absolute bottom-0 "></div>
    </div>
  );
};export default Hero;
