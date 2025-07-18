import Logo from "./component/Logo";

import Home from "./component/Home";
import Footer from "./component/Footer";
import HeroSection from "./component/Herosection";
import DestinationGallery from "./component/DestinationGallery";
import BlogSection from "./component/BlogPosts";
import ScrollHeroSection from "./component/ScrollHeroSection"
import ContactFormWithMap from "./component/ContactFormWithMap";


export default function () {
  return (



    <div>
      <Logo/>
     <Home/>
    <HeroSection/>
    <DestinationGallery/>
    <BlogSection/>
    <ScrollHeroSection/>
    <ContactFormWithMap/>
     <Footer/>
    </div>
    
    
  );
}
