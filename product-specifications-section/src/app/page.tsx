"use client";
import { ReactNode, useState } from "react";

type Tab = "Sustainability" | "Comfort" | "Durability" | "Versatility";

function clsx(...classNames: any[]) {
  return classNames.filter(Boolean).join(" ");
}

export default function Home() {
  const [currentTab, setCurrentTab] = useState<Tab>("Sustainability");

  function renderTab() {
    switch (currentTab) {
      case "Sustainability":
        return <SustainabilityTab />;
      case "Comfort":
        return <ComfortTab />;
      case "Durability":
        return <DurabilityTab />;
      case "Versatility":
        return <VersatilityTab />;
      default:
        return <div>Error</div>;
    }
  }
  return (
    <main className="flex flex-col m-4 bg-white min-h-screen p-4 rounded-lg gap-12">
      <header className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Discover timeless elegance</h1>
        <p className="font-light">
          Step into a world where quality meets quintessential charm with our
          collection. Every thread weaves a promise of unparalleled quality,
          ensuring that each garment is not just a part of your wardrobe, but a
          piece of art. Here&apos;s the essence of what makes our apparel the
          hallmark for those with an eye for excellence and a heart for the
          environment.
        </p>
      </header>
      <div>
        <ul className="flex overflow-hidden mb-4 border-b-2 border-neutral-300">
          <span className="z-10">
            <TabButton
              active={currentTab === "Sustainability"}
              onClick={() => setCurrentTab("Sustainability")}
            >
              Sustainability
            </TabButton>
          </span>
          <span className="z-10">
            <TabButton
              active={currentTab === "Comfort"}
              onClick={() => setCurrentTab("Comfort")}
            >
              Comfort
            </TabButton>
          </span>
          <span className="z-10">
            <TabButton
              active={currentTab === "Durability"}
              onClick={() => setCurrentTab("Durability")}
            >
              Durability
            </TabButton>
          </span>
          <span className="z-10">
            <TabButton
              active={currentTab === "Versatility"}
              onClick={() => setCurrentTab("Versatility")}
            >
              Versatility
            </TabButton>
          </span>
        </ul>
        {renderTab()}
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  className,
  children,
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      className={clsx(
        "inline-flex justify-center items-center px-4 py-2 transition",
        active && "text-blue-700 border border-blue-700 border-x-0 border-t-0",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SustainabilityTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <picture>
        <source media="(min-width: 768px)" srcset="/yellow-tablet.jpg" />
        <source media="(min-width: 1024px)" srcset="/yellow-desktop.jpg" />
        <img src="/yellow-mobile.jpg" alt="Black abstract image" />
      </picture>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Eco-Friendly Choice</h2>
        <p className="font-light">
          With our sustainable approach, we curate clothing that makes a
          statement of care—care for the planet, and for the art of fashion.
        </p>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="flex gap-2">
            <span>😀</span>
            <span>Recycled Materials</span>
          </li>
          <li className="flex gap-2">
            <span>😍</span>
            <span>Low Impact Dye</span>
          </li>
          <li className="flex gap-2">
            <span>🤮</span>
            <span>Carbon Neutral</span>
          </li>
          <li className="flex gap-2">
            <span>🥶</span>
            <span>Water Conservation</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ComfortTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <picture>
        <source media="(min-width: 768px)" srcset="/black-tablet.jpg" />
        <source media="(min-width: 1024px)" srcset="/black-desktop.jpg" />
        <img src="/black-mobile.jpg" alt="Black abstract image" />
      </picture>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Uncompromised Comfort</h2>
        <p className="font-light">
          Our garments are a sanctuary of softness, tailored to drape gracefully
          and allow for freedom of movement.
        </p>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="flex gap-2">
            <span>😀</span>
            <span>Ergonomic Fits</span>
          </li>
          <li className="flex gap-2">
            <span>😍</span>
            <span>Soft-to-the-Touch Fabrics</span>
          </li>
          <li className="flex gap-2">
            <span>🤮</span>
            <span>Breathable Weaves</span>
          </li>
          <li className="flex gap-2">
            <span>🥶</span>
            <span>Thoughtful Design</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function VersatilityTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <picture>
        <source media="(min-width: 768px)" srcset="/clothes-tablet.jpg" />
        <source media="(min-width: 1024px)" srcset="/clothes-desktop.jpg" />
        <img src="/clothes-mobile.jpg" alt="Black abstract image" />
      </picture>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Versatile by Design</h2>
        <p className="font-light">
          Our pieces are a celebration of versatility, offering a range of
          styles that are as perfect for a business meeting as they are for a
          casual brunch.
        </p>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="flex gap-2">
            <span>😀</span>
            <span>Adaptive Styles</span>
          </li>
          <li className="flex gap-2">
            <span>😍</span>
            <span>Functional Fashion</span>
          </li>
          <li className="flex gap-2">
            <span>🤮</span>
            <span>Timeless Aesthetics</span>
          </li>
          <li className="flex gap-2">
            <span>🥶</span>
            <span>Mix-and-Match Potential</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function DurabilityTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <picture>
        <source media="(min-width: 768px)" srcset="/chair-tablet.jpg" />
        <source media="(min-width: 1024px)" srcset="/chair-desktop.jpg" />
        <img src="/chair-mobile.jpg" alt="Black abstract image" />
      </picture>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Built to Last</h2>
        <p className="font-light">
          Here’s to apparel that you can trust to look as good as new, wear
          after wear, year after year.
        </p>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="flex gap-2">
            <span>😀</span>
            <span>Reinforced Construction</span>
          </li>
          <li className="flex gap-2">
            <span>😍</span>
            <span>Quality Control</span>
          </li>
          <li className="flex gap-2">
            <span>🤮</span>
            <span>Material Resilience</span>
          </li>
          <li className="flex gap-2">
            <span>🥶</span>
            <span>Warranty and Repair</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
