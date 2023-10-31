import React from "react";
import AdventureCard from "./AdventureCard";

const HowToBook = () => {
  return (
    <div className="w-full h-screen px-4 mb-[100px]">
      <div className="max-w-[1340px] mx-auto">
        <div className="pb-8">
          <h1 className="text-2xl font-bold pb-4">How to book a flight ticket with flight vibes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at mi at ante aliquet tristique non nec urna. Suspendisse sed tellus
            diam. Integer at arcu a justo malesuada aliquam eget nec orci.
            Phasellus luctus erat non eros tincidunt pretium id non lacus. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className="mt-4">
            Phasellus at mi at ante aliquet tristique non nec urna. Suspendisse
            sed tellus diam. Integer at arcu a justo malesuada aliquam eget nec
            orci.
          </p>
        </div>

        <div className="my-8  text-center">
          <h1 className="text-2xl font-bold my-2">Choose your next adventure</h1>
          <p>Popular destinations.</p>
        </div>

        <div className="carousel mx-[150px] flex gap-1 justify-center">
          <AdventureCard url="https://images.unsplash.com/photo-1680133054579-1df4ee1d401e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG91cmlzdCUyMGRlc3RpbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D" />
          <AdventureCard url="https://media.istockphoto.com/id/1483204178/photo/yellow-typical-tram-in-lisbon-portugal.webp?b=1&s=170667a&w=0&k=20&c=I38PbjayJexJwcLhnaJsWUyThW6sNnACeNEoHdF5Yio=" />
          <AdventureCard url="https://images.unsplash.com/photo-1680714111193-df12aac11eaa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRvdXJpc3QlMjBkZXN0aW5hdGlvbnN8ZW58MHx8MHx8fDA%3D" />
          <AdventureCard url="https://images.unsplash.com/photo-1621328406204-01060d16bf24?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRvdXJpc3QlMjBkZXN0aW5hdGlvbnN8ZW58MHx8MHx8fDA%3D" />

        </div>
      </div>
    </div>
  );
};

export default HowToBook;
