import React from "react";

function HeroImage() {
  return (
    <div>
      <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <img
          className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
          src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroImage;
