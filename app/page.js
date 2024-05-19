import Pagination from "./components/Pagination";
import Feature from "./components/pages/Feature";
import Hero from "./components/pages/Hero";
import Latest from "./components/pages/Latest";



export default function Home() {
 
  return (
    <div className="lg:w-[720px] md:w-[520px] w-[380px] m-auto    flex flex-col">
       <Hero/>
      <Feature />
      <Latest/>
      <Pagination/>
    </div>
  );
}


