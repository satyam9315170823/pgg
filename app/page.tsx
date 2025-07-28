import SliderOne from "@/components/ui/Slider";
import Faq from "./faq";
import Footer from "./footer";
import Founders from "./founders";
import Hero from "./hero";
import Navbar from "./navbar";
import { Projects } from "./projects";
import Statistics from "./stats";

// import Trusted from "./trusted";
import MidSec from "./midSec/page";
import Beam from "./beam/page";
import WebsiteDesign from "./expert/page";
import Pricing from "./pricing/page";
import { ScrollBasedVelocityDemo } from "@/components/ui/ScrollBasedVelocityDemo";

const Home = () => {
  return ( <div>
 <Navbar />
 <Hero />
 <MidSec/>
 {/* <Trusted /> */}
 <Projects />
 <Beam/>
 <WebsiteDesign/>
   <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>
 <Pricing/>
 <Founders />

 <SliderOne/>
 <Statistics />
 <Faq />
 <Footer />
  </div> );
}
 
export default Home;