"use client";

import Button from "@/components/Button";
import useScreenSize from "@/utils/useScreenSize";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "About us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 1024;
  return (
    <header className="flex justify-between items-center bg-gray-100 h-[84px]">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
    </header>
  );
}

function MobileHeader() {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <>
      <div className="font-bold">Abstractly</div>
      <button
        onClick={() => {
          setShowSideNav(true);
        }}
      >
        🍔
      </button>
      <aside
        className={twMerge(
          "fixed bg-white h-screen w-full left-0 top-0 -translate-x-full transition-transform",
          showSideNav && "translate-x-0",
        )}
      >
        <div className="flex justify-between items-start p-4">
          <nav className="flex flex-col gap-4 ">
            <div className="font-bold">Abstractly</div>
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={() => {
              setShowSideNav(false);
            }}
          >
            X
          </button>
        </div>
      </aside>
    </>
  );
}

function DesktopHeader() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-32">
        <div className="font-bold">Abstractly</div>
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary">Learn More</Button>
        <Button>See pricing</Button>
      </div>
    </div>
  );
}

export default Header;
