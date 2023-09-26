import React from "react";

function FooterItem({ item }) {
  return (
    <div>
      <div className="mb-8 lg:mb-0">
        <p className="mb-6 text-lg font-semibold text-white">{item.title}</p>
        <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
          <li>{item.link1}</li>
          <li>{item.link2}</li>
          <li>{item.link3}</li>
          <li>{item.link4}</li>
          <li>{item.link5}</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterItem;
