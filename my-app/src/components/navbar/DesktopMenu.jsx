import React from "react";
import Item from "./Item";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blogs",
    href: "#",
  },
];

function DesktopMenu() {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <ul className="inline-flex space-x-8">
          {menuItems.map((item) => (
            <Item item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DesktopMenu;
