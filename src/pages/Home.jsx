import Slider from "../components/Carousel";
import Footer from "../components/Footer";
import HowitWorks from "../components/HowitWorks";
import MainPage from "../components/MainPage";
import NavBar from "../components/NavBar";
function Home() {
  
  return (
    <>
      <NavBar />
      <MainPage />
      <Slider/>
      <HowitWorks/>
      <Footer />
    </>
  );
}


export default Home;

/* sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px @media (min-width: 1536px) { ... }  */