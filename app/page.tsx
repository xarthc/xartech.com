import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import Services from "./components/Services"
import BundleSection from "./components/BundleSection"
import RecentWork from "./components/RecentWork"
import Testimonials from "./components/Testimonial"
import ContactSection from "./components/ContactUs"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import Technologies  from "./components/Technologies"

export default function Home(){
  return(
    <main>
      <Hero/>
      <AboutSection/>
      <Services/>
      {/* <Technologies/> */}
      {/* <RecentWork/> */}
      {/* <BundleSection/> */}
      <Testimonials/>
<ContactSection/>
<Footer/>
<CustomCursor/>
    </main>
  )
}