"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

type Link = { label: string; href: string };

const links: Link[] = [
  { label: "Shop all", href: "/" },
  { label: "Latest arrivals", href: "/" },
];

function NavBar() {
  const [startTransition, setStartTransition] = useState(false);

  function onTransition() {
    setStartTransition(true);
  }

  function onClose() {
    setStartTransition(false);
  }
  return (
    <header>
      <div className="flex justify-between p-4">
        <div className="flex items-center gap-20">
          <div className="font-bold text-xl">Logo</div>
          <nav>
            <ul className="flex gap-4 invisible lg:visible">
              {links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <button>🛒</button>
          <button className="lg:hidden" onClick={onTransition}>
            🍔
          </button>
        </div>
      </div>

      <MobileSideNavbar
        className={startTransition ? "translate-x-0" : ""}
        onClose={onClose}
      />
    </header>
  );
}

function MobileSideNavbar({
  className,
  onClose,
}: {
  className: string;
  onClose: () => void;
}) {
  return (
    <aside
      className={twMerge(
        "transition -translate-x-full fixed bg-gray-100 w-svw h-screen top-0 left-0 p-4",
        className,
      )}
    >
      <div className="flex justify-between mb-8">
        <div className="font-bold text-xl ">Logo</div>
        <button onClick={onClose}>X</button>
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </aside>
  );
}
