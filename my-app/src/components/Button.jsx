import React from "react";

function Button({ children }) {
  return (
    <div>
      {" "}
      <div className="hidden lg:block">
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {children}
        </button>
      </div>
    </div>
  );
}

export default Button;
