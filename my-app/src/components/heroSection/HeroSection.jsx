import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const heroSectionContent = {
  hiring: `We hiring ->`,
  joining: `Join our team `,
  title: "People who care about your growth",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  modi blanditiis dolores quasi eaque explicabo!`,
};

function HeroSection() {
  return (
    <div>
      {" "}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <HeroContent content={heroSectionContent} />
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
