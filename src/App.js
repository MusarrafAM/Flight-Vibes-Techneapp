import Hero from "./comonents/Hero";
import WhyFaq from "./comonents/WhyFaq";
import PlanFlight from "./comonents/PlanFlight";
import Specific from "./comonents/Specific";
import Blogs from "./comonents/Blogs";
import Members from "./comonents/Members";
import Footer from "./comonents/Footer";
import HowToBook from "./comonents/HowToBook";

export default function App() {
  return (
    <div>
      <Hero />
      <WhyFaq />
      <PlanFlight />
      <HowToBook />
      <Specific />
      <Blogs />
      <Members />
      <Footer />
    </div>
  );
}
