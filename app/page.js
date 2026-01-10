import Hero from "./components/Hero";
import OurSuccess from "./components/OurSuccess";
import HowitWorks from "./components/HowitWorks";
import SignUp from "./components/SignUp";
import StartNow from "./components/StartNow";
import NetImage from "./components/Net";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-blue-100 ">
      <Navbar />
      <Hero />

      <OurSuccess />

      <HowitWorks />

      <SignUp />

      <StartNow />

      <NetImage />

      <Footer />
    </div>
  );
}
