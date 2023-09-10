import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import Packages from "./Packages";
import Gallery from "./Gallery";
AOS.init();

const Home = () => {

  return (
    <>
      <Banner />
      <Packages />
      <Gallery />
    </>
  );
};

export default Home;
