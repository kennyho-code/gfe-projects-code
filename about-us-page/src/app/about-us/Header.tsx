"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "About us", href: "/" },
  { label: "Contact", href: "/" },
];

function useScreenSize() {
  const [screenSize, setScreenSize] = useState<{
    height: number;
    width: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function onResize() {
      console.log("resize!");
      setScreenSize({ height: window.innerHeight, width: window.innerWidth });
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return screenSize;
}

function Header() {
  const screenSize = useScreenSize();

  const isMobile = screenSize.width <= 1024;

  return <div>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
}

function DesktopHeader() {
  return (
    <div className="bg-gray-100 py-4 flex justify-between items-center mx-auto">
      <div className="flex gap-12">
        <div className="font-bold">Abstractly</div>
        <nav>
          <ul className="flex gap-6">
            {links.map((link) => (
              <Link className="text-gray-600" key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <Button className="w-[125px] bg-white text-black">Learn more</Button>
        <Button className="w-[125px]">See pricing</Button>
      </div>
    </div>
  );
}

function MobileHeader() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <header className="bg-gray-100 py-4">
        <div className="flex justify-between">
          <div className="font-bold">Abstractly</div>
          <button
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            🍔
          </button>
        </div>
      </header>
      <nav
        className={twMerge(
          "top-0 left-0 fixed w-3/4 bg-white -translate-x-full transition-transform h-screen p-4 shadow-lg",
          showSideBar && "translate-x-0",
        )}
      >
        <ul className="flex flex-col gap-4">
          <div className="font-bold">Abstractly</div>
          {links.map((link) => (
            <Link className="text-" key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
