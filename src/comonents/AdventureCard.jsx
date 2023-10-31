import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const AdventureCard = (props) => {
  return (
    <div className="each-card relative w-[250px] h-[350px] mb-[100px]">
      <button className="absolute right-0 bg-white m-4 mt-3 text-red-400 rounded-full p-2 hover:bg-red-400 hover:text-white duration-300">
        <AiOutlineHeart size={23} />
      </button>
      <p className="absolute bottom-2 mx-auto right-[40%] text-white">Carlifornia</p>
      <div className="h-full">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={props.url}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdventureCard;
