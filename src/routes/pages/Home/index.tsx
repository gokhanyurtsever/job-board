import Hero from "../../../components/Hero";
import Services from "../../../components/Services";
import WelcomeText from "../../../components/WelcomeText";



const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <div className="w-full mt-12 mb-16">
        <WelcomeText />
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
          
        </div>
      </div>
    </div>
  );
}

export default Home;