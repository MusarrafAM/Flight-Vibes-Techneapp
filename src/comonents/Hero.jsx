import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen relative overflow-x-clip">
      <Navbar />
      <div className="play-effect w-[100px] h-[100px] rounded-full bg-red-600 absolute right-[200px] top-[300px] z-50"></div>
      <div className="firstvirtical-bar w-[300px] h-[79%] absolute right-[-5%] skew-x-[-15deg] z-40 ">
        <img
          className="w-[100%] h-[100%] object-cover"
          src="https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="secondvertical-bar w-[260px] h-[500px] absolute right-[10%] bottom-[-30px] skew-x-[-15deg] z-30 border-4  border-white">
        <img
          className="w-[100%] h-[100%] object-cover"
          src="https://images.unsplash.com/photo-1487553333251-6c8e26d3dc2c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW5lfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="Bottom_Gradient_Line w-full h-[100px] absolute bottom-0 "></div>
    </div>
  );
};
export default Hero;
