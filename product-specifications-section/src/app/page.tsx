"use client";
import { useState } from "react";

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
        <ul className="flex gap-8">
          <li>
            <button
              className={clsx(
                currentTab === "Sustainability" && "text-blue-700",
                "border-2 inline-flex justify-center items-center px-4 py-2"
              )}
              onClick={() => setCurrentTab("Sustainability")}
            >
              Sustainability
            </button>
          </li>
          <li>
            <button
              className={clsx(currentTab === "Comfort" && "text-blue-700")}
              onClick={() => setCurrentTab("Comfort")}
            >
              Comfort
            </button>
          </li>
          <li>
            <button
              className={clsx(currentTab === "Durability" && "text-blue-700")}
              onClick={() => setCurrentTab("Durability")}
            >
              Durability
            </button>
          </li>
          <li>
            <button
              className={clsx(currentTab === "Versatility" && "text-blue-700")}
              onClick={() => setCurrentTab("Versatility")}
            >
              Versatility
            </button>
          </li>
        </ul>
        <hr className="h-1 w-full bg-gray-200 mt-2 mb-2" />
        {renderTab()}
      </div>
    </main>
  );
}

function TabButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      className={clsx(
        "border-2 inline-flex justify-center items-center px-4 py-2",
        className
      )}
      onClick={onClick}
    >
      Sustainability
    </button>
  );
}

function SustainabilityTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <img src="/black-mobile.jpg" />
      <h2 className="text-xl">Uncompromised Comfort</h2>
      <p className="font-light">
        With our sustainable approach, we curate clothing that makes a statement
        of care—care for the planet, and for the art of fashion.
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
  );
}

function ComfortTab() {
  return (
    <div className="flex flex-col">
      <img src="/black-mobile.jpg" />
      <h2 className="text-2xl">Eco-Friendly Choice</h2>
      <ul>
        <li>Ergonomic Fits</li>
        <li>Soft-to-the-Touch Fabrics</li>
        <li>Breathable Weaves</li>
        <li>Thoughtful Design</li>
      </ul>
    </div>
  );
}

function VersatilityTab() {
  return (
    <div className="flex flex-col lg:flex-row">
      <img src="/black-mobile.jpg" />
      <h2>Uncompromised Comfort</h2>
      <ul>
        <li>Ergonomic Fits</li>
        <li>Soft-to-the-Touch Fabrics</li>
        <li>Breathable Weaves</li>
        <li>Thoughtful Design</li>
      </ul>
    </div>
  );
}

function DurabilityTab() {
  return (
    <div className="flex flex-col lg:flex-row">
      <img src="/black-mobile.jpg" />
      <h2>Uncompromised Comfort</h2>
      <ul>
        <li>Ergonomic Fits</li>
        <li>Soft-to-the-Touch Fabrics</li>
        <li>Breathable Weaves</li>
        <li>Thoughtful Design</li>
      </ul>
    </div>
  );
}
