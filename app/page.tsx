
import { Fa0 } from "react-icons/fa6";
import AboutUs from "./ui/aboutus";
import Caroucel from "./ui/carousel";
import Counter from "./ui/counter";
import Departments from "./ui/departments";
import Doctors from "./ui/doctors";
import Drop from "./ui/drop";
import Emergency from "./ui/emergency";
import Gallery from "./ui/gallery";
import MakeApp from "./ui/make-appo";
import Menu from "./ui/menu";
import NavBar from "./ui/nav-bar";
import Pricing from "./ui/pricing";
import { Services } from "./ui/services";
import Testimonials from "./ui/testimonials";
import FAQ from "./ui/faq";
import Contact from "./ui/contact";
import Footer from "./ui/footer";
import Footer2 from "./ui/footer2";
import BackToTop from "./ui/backtotop";

export default function Home() {
  return (
    <>
    <NavBar/>
    <Caroucel/>
    <Menu/>
    <Emergency/>
    <AboutUs/>
    <Counter/>
    <Drop/>
    <Services/>
    <MakeApp/>
    <Departments/>
    <Testimonials/>
    <Doctors/>
    <Gallery/>
    <Pricing/>
    <FAQ/>
    <Contact/>
    <Footer/>
    <Footer2/>
    <BackToTop/>
    </>
  );
}
