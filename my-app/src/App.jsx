import "./App.css";
import { Blog } from "./components/blog/Blog";
import { LandinngPage } from "./components/LandinngPage";
import FeaturesSections from "./components/featuresSection/FeaturesSections";
import Footer from "./components/footer/Footer";
import Fqas from "./components/fqas/Fqas";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import PricingSection from "./components/pricing/PricingSection";
import BlogHero from "./components/blog/blogHero/BlogHero";
import ToDoList from "./toDoList/ToDoList";

function App() {
  return (
    <div className="container mx-auto">
      {/* <LandinngPage>
        <Navbar />
        <HeroSection />
        <FeaturesSections />
        <Fqas />
        <PricingSection />
        <Footer />
      </LandinngPage> */}

      {/* blog  */}
      {/* <Blog>
        <Navbar />
        <BlogHero />
        <Footer />
      </Blog> */}

      <ToDoList />
    </div>
  );
}

export default App;
