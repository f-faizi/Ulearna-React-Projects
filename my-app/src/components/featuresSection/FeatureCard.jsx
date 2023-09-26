import React from "react";

function FeatureCard({ img, title, details }) {
  return (
    <div className="text-white">
      <div className="mx-auto flex h-20 w-28 items-center justify-center rounded-full">
        <img src={img} alt="" className="rounded-full" />
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black">{title}</h3>
      <p className="mt-4 text-sm text-gray-600">{details}</p>
    </div>
  );
}

export default FeatureCard;
