import React from "react";

const Specific = () => {
  return (
    <div className="relative h-screen">
      <div className="first w-full bg-purple-500 h-[500px] skew-y-[-8deg] absolute"></div>
      <div className="second w-full h-[500px] skew-y-[8deg]">
        <img
          className="w-[100%] h-[100%] object-fill"
          src="https://media.istockphoto.com/id/1482698155/photo/smokey-mountain-sunset.webp?b=1&s=170667a&w=0&k=20&c=vlDJvIsKXjjQ5-c3WfIcVSk5VrIPwrA58uFiFTp03B0="
          alt=""
        />
      </div>
      <div className="texts absolute left-[38%] top-[30%] text-white">
        <h1 className="text-2xl">
          Do you have a specific destination in mind,
        </h1>
        <h1 className="text-center text-2xl mb-4">
          or are you open to suggestions?
        </h1>
        <button className="bg-purple-500 ml-[30%] text-sm py-2 px-10 rounded-">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Specific;
