import React from "react";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import { MdFlight, MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiSolidHotel } from "react-icons/bi";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="h-screen relative overflow-x-clip">
      <Navbar />
      <div className="complex-hero mx-[60px] mt-[50px] absolute ">
        <h1 className="text-4xl font-bold text-[#1b4896] mb-4">
          Exploring the world <br />
          In Comfort. Enjoy Your Life
        </h1>

        <div className="first-row flex">
          <div className="w-[80px] h-[100px] bg-[#02bd90] rounded-md mr-2">
            <div className="rotate-[-90deg] text-white mt-3 flex flex-col items-center">
              <MdFlight size={48} />
              <p className="pr-2">Flight</p>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="bg-blue-100 rounded-md relative pr-8">
              <div className="absolute right-[-35px] top-[20px] w-[60px] h-[60px] bg-[#02bd90] rounded-full z-20 text-white">
                <BsArrowRight className="mx-auto mt-3" />
                <BsArrowLeft className="mx-auto" />
              </div>
              <div className="takeoff-icon absolute right-6">
                <MdFlightTakeoff size={20} />
              </div>
              <div className="p-4">
                <div className="text-xs">From</div>
                <h2 className="text-3xl text-blue-900 font-medium">London</h2>
                <p className="">LHR - London hearthnow, United king..</p>
              </div>
            </div>
            <div className="bg-blue-100 rounded-md ml-4 relative pl-8">
              <div className="takeoff-icon absolute right-6">
                <MdFlightLand size={20} />
              </div>
              <div className="p-4">
                <div className="text-xs">To</div>
                <h2 className="text-3xl text-blue-900 font-medium">Colombo</h2>
                <p className="">CMB - Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="second-row grid grid-cols-8 grid-rows-4 ">
          <div className="1st-col rotate-[-90deg] bg-gray-200 rounded-md mr-2 w-[70px] h-[60px]">
              <h1>Hotel</h1>
              <BiSolidHotel />
          </div>
          <div className="row-span-3 col-span-2 bg-blue-100 rounded-md my-3 mr-3 p-4">
            Departure
          </div>
          <div className="row-span-3 col-span-2 bg-blue-100 rounded-md my-3 mx-3 p-4">
            ReturnOn
          </div>
          <div className="row-span-3 col-span-3 bg-blue-100 rounded-md my-3 p-4">
            <h1>Traveler & Room</h1>
            <h2 className="text-blue-900 font-bold text-2xl">
              7 Travelers, 1 Room
            </h2>
            <h1 className="text-blue-900 font-bold text-3xl">Economy</h1>
            <p>3 Adults, 4 childs</p>
          </div>
          <div className="row-span-2 rotate-[-90deg] bg-gray-200 rounded-md mr-2 w-[70px] h-[60px] mt-4">
              <h1>Restruent </h1>
              <BiSolidHotel />
          </div>

          {/* <div className="1st-col rotate-[-90deg] bg-[#02bd90] rounded-md mr-2 ">
              <h1>Hotel</h1>
              <BiSolidHotel />
          </div> */}

          <div className="row-span-2 col-span-2 text-right pr-4 border-r-2 border-black">
            Return
          </div>
          <div className="row-span-2">Connect Box</div>
          <div className="col-span-5 bg-blue-900 text-white rounded-lg h-[60px] flex items-center justify-center">
            <BsSearch size="30" />
            <p className="text-3xl pl-6">Search</p>
          </div>
        </div>
      </div>

      <div className=" play-effect absolute right-[11%] top-[35%] z-50">
        <div className="relative">
          {/*  Way to centure an absolute div mx-auto left-0 right-0 */}
          {/* inset-0 = top-0 bottom-0 left-0 right-0 */}
          <div className="play-effect opacity-40 w-[50px] h-[50px] rounded-full bg-white absolute mx-auto my-auto inset-0 z-10"></div>
          <FaPlay
            size={20}
            className="playButton absolute mx-auto my-auto inset-0 z-30"
          />
          <div className="play-effect w-[80px] h-[80px] rounded-full absolute border border-white mx-auto my-auto inset-0"></div>
          <div className="play-effect w-[120px] h-[120px] rounded-full border border-white mx-auto my-auto inset-0"></div>
        </div>
      </div>

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
