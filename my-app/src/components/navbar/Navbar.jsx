import React from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  X,
} from "lucide-react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import Button from "../Button";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <div>
      {" "}
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <Logo />
          <DesktopMenu />
          <Button>Text Button</Button>
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
