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
import RatingStars from "./components/ratingStars/RatingStars";
import { useState } from "react";
import ShowMore from "./components/showMore/ShowMore";
import UseEffectHook from "./hooks/UseEffectHook";

function App() {
  const [movieRating, setMovieRating] = useState(null);

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

      {/* <ToDoList /> */}
      {/* <RatingStars maxLength={10} className="w-8" color="#ffcc49" />
      <RatingStars maxLength={10} className="w-6" color="#ff2249" />
      <RatingStars
        maxLength={10}
        className="w-4"
        color="#00a1ff"
        defaultRating={8}
      />
      <RatingStars
        maxLength={5}
        className="w-5"
        color="#05f1af"
        massege={["tarible", "bad", "okay", "good", "better"]}
        defaultRating={3}
      /> */}
      {/* <div>
        <RatingStars color="#67ee22" setMovieRating={setMovieRating} />
        {movieRating ? (
          <p>Movie was rated {movieRating ? movieRating : ""} </p>
        ) : (
          "Please rate the movie"
        )}
      </div> */}
      {/* <ShowMore /> */}
      <UseEffectHook />
    </div>
  );
}

export default App;
