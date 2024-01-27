"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative " >
          <nav className="nav">
      <Link href="/">
        <Image src="/logo.svg" alt="logo"  className=" flex-1 object-cover " width={182} height={52} />
      </Link>

      <ul
        className={`
        nav_list
        ${isOpen
          ? "max-lg:opacity-1 max-lg:translate-x-[-50%] max-lg:bg-grey-500/80 max-lg:w-full max-lg:h-screen z-1000 "
          : "max-lg:opacity-0 max-lg:translate-x-[-1000%]  "
        }
      `}
      >
        {NAV_LINKS.map((link) => (
      
             <Link
         key={link.label}

               href={link.path}
               onClick={() => setIsOpen(false)}
               className="nav_link"
             >
               {link.label}
             </Link>
        ))}
      </ul>

  
      <Image
          className="lg:hidden cursor-pointer "
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          onClick={() => setIsOpen((prev) => !prev)}
        />
    </nav>
    </header>
  );
};

export default Navbar;