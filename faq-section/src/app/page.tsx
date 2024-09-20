"use client";
import { useId, useState } from "react";
import DATA, { Tab } from "./data";

export default function Home() {
  return (
    <div>
      <main className="p-4">
        <header className="text-center pt-4 pb-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Frequently asked questions
          </h1>
          <div>Get all your questions answered</div>
        </header>
        <TabList data={DATA} />
        <Footer />
      </main>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-4 border-2 rounded-md p-4 justify-between md:items-center">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">
          Can’t find the answer you’re looking for?
        </h2>
        <div>
          Reach out to our{" "}
          <a href="#" className="text-blue-500 cursor-pointer">
            customer support
          </a>{" "}
          team.
        </div>
      </div>
      <div>
        <button className="w-full text-white font-semibold bg-blue-500 rounded-md px-4 py-2">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

function createHeaderId(id: string) {
  return id + "-tab-header";
}

function createPanelId(id: string) {
  return id + "-tab-panel";
}

function TabList({ data }: { data: Tab[] }) {
  const [openedTabs, setOpenedTabs] = useState(
    new Set(data.map((tab) => tab.id)),
  );
  const id = useId();
  return (
    <ul className="flex flex-col">
      {data.map((tab) => {
        const opened = openedTabs.has(tab.id);
        return (
          <div className="border-b-2 last:border-b-0 pt-4 pb-4" key={tab.id}>
            <h2
              id={createHeaderId(id)}
              aria-expanded={opened}
              aria-controls={createPanelId(id)}
              onClick={() => {
                const newOpenedTabs = new Set(openedTabs);
                if (opened) {
                  newOpenedTabs.delete(tab.id);
                } else {
                  newOpenedTabs.add(tab.id);
                }
                setOpenedTabs(newOpenedTabs);
              }}
              role="button"
              className="font-bold flex gap-2 items-start justify-between"
            >
              <span>{tab.header}</span>
              <button className="border-2 rounded-full w-6 h-6 flex justify-center items-center">
                <span className="text-gray-500">{opened ? "-" : "+"}</span>
              </button>
            </h2>
            {openedTabs.has(tab.id) && (
              <div id={createPanelId(id)} aria-describedby={createHeaderId(id)}>
                {tab.panel}
              </div>
            )}
          </div>
        );
      })}
    </ul>
  );
}
