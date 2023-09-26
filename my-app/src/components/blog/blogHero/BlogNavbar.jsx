import React from "react";

function BlogNavbar() {
  return (
    <div>
      <div className="flex w-full items-end border-b border-gray-300">
        {["Design", "Product", "Software Engineering", "Customer Success"].map(
          (filter, index) => (
            <div
              className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
              key={filter}
            >
              {filter}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default BlogNavbar;
