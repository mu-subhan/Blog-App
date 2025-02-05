import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open,setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-4">
      {/* logo */}
      <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
        <Image src="public/logo.png" alt="logo" w={32} h={32} />
        <span>Lamalog</span>
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile button */}
        <div className="cursor-pointer text-4xl" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <img className="h-8" src="/menu.png" alt="menu" />
          ) : (
            <img className="h-8" src="/cros.png" alt="Cross" />
          )}
        </div>
        
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 left-0 bg-white shadow-md transition-all ease-in-out duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="/" className="py-4 text-xl">Home</a>
          <a href="/" className="py-4 text-xl">Trending</a>
          <a href="/" className="py-4 text-xl">Most Popular</a>
          <a href="/" className="py-4 text-xl">About</a>
          <a href="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </a>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <SignedOut>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login 👋
          </button>
        </a>

      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
