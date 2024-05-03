import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <div className="relative min-w-full min-h-screen">
        <div
          className="absolute bg-center bg-cover min-h-screen min-w-full"
          style={{ backgroundImage: `url("cover-image.jpg")` }}
        ></div>
        <div className="absolute bg-black bg-opacity-50 min-h-screen min-w-full"></div>
        <div className="relative z-20">
          <Header />
          <HeroSection />
        </div>
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
