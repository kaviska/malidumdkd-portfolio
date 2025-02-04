//import Image from "next/image";
import {NavBar,ContactUs,Hero,MyProfile,Footer,AboutMe, Experience, Project} from "@/components";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="background-image">
      <Hero />
      <MyProfile />
      </div>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Project/>
     
      <ContactUs/>

      <Footer />
   

    </div>
    
  );
}
