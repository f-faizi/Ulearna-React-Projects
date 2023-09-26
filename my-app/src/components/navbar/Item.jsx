import React from "react";

function Item({ item }) {
  return (
    <div>
      {" "}
      <li>
        <a
          href={item.href}
          className="text-sm font-semibold text-gray-800 hover:text-gray-900"
        >
          {item.name}
        </a>
      </li>
    </div>
  );
}

export default Item;
