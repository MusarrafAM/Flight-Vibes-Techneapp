import React from "react";
import PriceCard from "./PriceCard";

const PlanFlight = () => {
  return (
    <div className="h-screen my-10">
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2">
          Plan your next trip with flight vibes
        </h1>
        <p className="mb-4">treading details</p>
      </div>

      <div className="image-card-carousel mx-[150px] flex gap-1">
        <PriceCard url="https://cdn.pixabay.com/photo/2020/08/29/18/50/coastal-5527726_640.jpg" />
        <PriceCard url="https://media.istockphoto.com/id/1364745633/photo/rear-view-of-a-woman-with-a-hat-while-shes-admiring-an-ancient-temple-in-sicily.webp?b=1&s=170667a&w=0&k=20&c=P3K0L6x7siEDuHS7LbI92g2yodCENvrTd3hSkeiMmZg="/>
        <PriceCard url="https://images.pexels.com/photos/190339/pexels-photo-190339.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <PriceCard url="https://images.pexels.com/photos/2412606/pexels-photo-2412606.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>
    </div>
  );
};

export default PlanFlight;
