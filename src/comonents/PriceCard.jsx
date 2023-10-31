import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const PriceCard = (props) => {
  return (
    <div className="each-card relative w-[250px] h-[300px] my-[100px]">
      <button className="absolute bg-white m-4 p-2 rounded-md text-xs hover:bg-blue-600 hover:text-white duration-300">
        Explore
      </button>
      <button className="absolute right-0 bg-white m-4 mt-3 text-red-400 rounded-full p-2 hover:bg-red-400 hover:text-white duration-300">
        <AiOutlineHeart size={23} />
      </button>
      <div className="h-[200px]">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={props.url}
          alt=""
        />
      </div>
      <div className="grid grid-rows-2 bg-gray-200 relative">
        <div className="half-circle w-[20px] h-[20px] bg-white absolute rounded-full left-[-10px] top-[-10px]"></div>
        <div className="half-circle w-[20px] h-[20px] bg-white absolute rounded-full right-[-10px] top-[-10px]"></div>
        <div>
          <div className="flex justify-between px-4 pt-2">
            <p>Carlifornia</p>
            <p className="text-blue-700">$478 pp</p>
          </div>
          <div className="flex justify-between px-4 pb-1">
            <p className="text-sm">Colombo-Riga</p>
            <p className="text-xs flex items-center">[29h 30m]</p>
          </div>
        </div>
        <div className="flex items-center justify-center border-gray-400 border-t-2 text-xs">
          Business Class, 3 Nights
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
