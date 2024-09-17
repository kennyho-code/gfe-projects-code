"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleScreenSize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return screenSize;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Features" },
  { href: "/", label: "Pricing" },
  { href: "/", label: "About us" },
  { href: "/", label: "Contact" },
];

function Navbar() {
  const screenSize = useScreenSize();

  return screenSize.width >= 1440 ? <DesktopNavBar /> : <MobileNavBar />;
}

function DesktopNavBar() {
  return (
    <header className="flex justify-between max-w-[1440px] w-full items-center p-8 m-auto">
      <div className="flex gap-40">
        <Link href="/">Logo</Link>

        <nav>
          <ul className="flex gap-8">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <button className="py-2 px-4 border-2 bg-white rounded-lg">
          Learn More
        </button>
        <button className="py-2 px-4 border-2 bg-blue-800 rounded-lg text-white">
          Try it out
        </button>
      </div>
    </header>
  );
}

function MobileNavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="flex justify-between p-4">
        <div>Logo</div>
        <button onClick={() => setOpen(!open)}>
          {open ? <span>✖️</span> : <span>🍔</span>}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col justify-between h-screen">
          <ul className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mb-[75px] p-4">
            <button className="py-2 px-4 border-2 bg-white rounded-lg">
              Learn More
            </button>
            <button className="py-2 px-4 border-2 bg-blue-800 rounded-lg text-white">
              Try it out
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
