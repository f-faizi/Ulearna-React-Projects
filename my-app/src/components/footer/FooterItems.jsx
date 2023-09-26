import React from "react";
import FooterItem from "./FooterItem";

const footerData = [
  {
    id: 1,
    title: "Company",
    link1: "About us",
    link2: "Company History",
    link3: "Our Team",
    link4: "Our Vision",
    link5: "Press Release",
  },
  {
    id: 2,
    title: "Our Stores",
    link1: "About us",
    link2: "Company History",
    link3: "Our Team",
    link4: "Our Vision",
    link5: "Press Release",
  },
  {
    id: 3,
    title: "Services",
    link1: "About us",
    link2: "Company History",
    link3: "Our Team",
    link4: "Our Vision",
    link5: "Press Release",
  },
  {
    id: 4,
    title: "Services",
    link1: "About us",
    link2: "Company History",
    link3: "Our Team",
    link4: "Our Vision",
    link5: "Press Release",
  },
  {
    id: 5,
    title: "Services",
    link1: "About us",
    link2: "Company History",
    link3: "Our Team",
    link4: "Our Vision",
    link5: "Press Release",
  },
];

function FooterItems() {
  return (
    <div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {footerData.map((item) => (
          <FooterItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default FooterItems;
