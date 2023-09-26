import React from "react";
import FooterItems from "./FooterItems";

function Footer() {
  return (
    <div className="bg-[url('../../../public/6.jpg')] bg-cover">
      {" "}
      <div className="mx-auto pt-12 max-w-7xl">
        <footer className="px-4 py-10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mt-4 grow md:ml-12 md:mt-0">
              <p className="text-base font-semibold text-white">
                © 2023 DevUI Component Library
              </p>
            </div>
          </div>
          <FooterItems />
        </footer>
      </div>
    </div>
  );
}

export default Footer;
