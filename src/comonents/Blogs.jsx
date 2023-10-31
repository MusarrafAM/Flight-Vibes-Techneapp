import React from "react";

const Blogs = () => {
  return (
    <div className="w-full h-screen pb-16 px-4">
      <div className="max-w-[1340px] mx-auto">
        <h2 className="text-center font-bold text-xl">Our Blogs</h2>
        <p className="text-center mb-[50px]">Let's explore more</p>

        <div className="grid grid-cols-2">
          <div className="px-[20px]">
            <img
              className="rounded-lg w-full"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fHww"
              alt=""
            />
            <h3 className="font-bold text-xl my-4">Overseas Highways</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              nulla vitae elit tempor porttitor vitae a odio. Praesent luctus
              malesuada diam, vitae efficitur nunc commodo eu. Pellentesque
              venenatis vitae nibh vel dapibus. Praesent ex orci, mollis sit
              amet libero et, condimentum sollicitudin ante. Donec dolor diam,
              posuere a risus in, bibendum vestibulum libero.
            </p>
            <p className="my-2 text-blue-700">Read more</p>
          </div>
          <div className="grid grid-rows-4">
            <div className="each- flex">
              <div className="w-[400px] mr-4 mt-2">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg "
                  src="https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRvdXJpc3QlMjBkZXN0aW5hdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-xl pt-2">Overseas Highways</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  in nulla vitae elit tempor porttitor vitae a odio. Praesent
                  luctus malesuada diam, vitae efficitur nunc commodo eu.
                </p>
                <p className="my-2 text-blue-700">Read more</p>
              </div>
            </div>

            <div className="each- flex">
              <div className="w-[400px] mr-4 mt-2">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg "
                  src="https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_640.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-xl pt-2">Thanks Flight Vibes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  in nulla vitae elit tempor porttitor vitae a odio. Praesent
                  luctus malesuada diam, vitae efficitur nunc commodo eu.
                </p>
                <p className="my-2 text-blue-700">Read more</p>
              </div>
            </div>

            <div className="each- flex">
              <div className="w-[400px] mr-4 mt-2">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg "
                  src="https://media.istockphoto.com/id/1415179589/photo/jet-flight-travel-concept-stock-photo-airplane-fly-above-amazing-blue-misty-mountain.webp?b=1&s=612x612&w=0&k=20&c=RzE1K9JvFdhKTvdwewG87MOry1EAEsMO4Se3imLEemM="
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-xl pt-2">
                  Easily Find your Perfect Flight
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  in nulla vitae elit tempor porttitor vitae a odio. Praesent
                  luctus malesuada diam, vitae efficitur nunc commodo eu.
                </p>
                <p className="my-2 text-blue-700">Read more</p>
              </div>
            </div>

            <div className="each- flex">
              <div className="w-[400px] mr-4 mt-2">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg "
                  src="https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689_640.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-bold text-xl pt-2">
                  Top 10 Places To visit
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  in nulla vitae elit tempor porttitor vitae a odio. Praesent
                  luctus malesuada diam, vitae efficitur nunc commodo eu.
                </p>
                <p className="my-2 text-blue-700">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
