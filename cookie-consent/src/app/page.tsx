"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Switch from "@/components/Switch";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCookieConsentOpen, setIsCookieConsentOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCookieConsent = () => setIsCookieConsentOpen(true);
  const closeCookieConsent = () => setIsCookieConsentOpen(false);
  return (
    <div className="h-screen bg-pink-50">
      <div className="text-4xl font-bold "> Hello world</div>
      <CookieConsent
        onDeclineAll={closeCookieConsent}
        hide={!isCookieConsentOpen}
        onManage={() => {
          console.log("managing");
          openModal();
        }}
      />
      <Modal isOpen={isModalOpen} onClose={() => console.log("closed")}>
        <ManageCookies onDeclineAll={closeModal} />
      </Modal>
    </div>
  );
}

const settingsInfo = [
  {
    title: "Essentials",
    description:
      "These cookies are essential for the proper functioning of our services and cannot",
  },
  {
    title: "Analytics",
    description:
      "These cookies collect information about how you use our services or potential errors you encounter. Based on this information we are able to improve your experience and react to any issues.",
  },
  {
    title: "Marketing",
    description:
      "These cookies allow us to show you advertisements relevant to you through our advertising partners",
  },
];

function ManageCookies({ onDeclineAll }: { onDeclineAll: () => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        {settingsInfo.map((setting) => (
          <div key={setting.title}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">{setting.title}</h2>
              <Switch
                isOn={true}
                handleToggle={() => {
                  console.log(setting.title);
                }}
              />
            </div>
            <p className="text-gray-600">{setting.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button
            className="bg-blue-800"
            onClick={() => console.log("clicked")}
          >
            Accept all
          </Button>
          <Button
            className="bg-white border-2 shadow-sm text-black"
            onClick={() => console.log("hello")}
          >
            Save
          </Button>
        </div>
        <Button className="bg-red-500" onClick={onDeclineAll}>
          Decline All
        </Button>
      </div>
    </div>
  );
}

function CookieConsent({
  onDeclineAll,
  onManage,
  hide,
}: {
  onDeclineAll: () => void;
  onManage: () => void;
  hide: boolean;
}) {
  return (
    <div
      className={twMerge(
        "bg-white fixed bottom-0 p-4 flex justify-center w-full",
        hide && "hidden",
      )}
    >
      <div className="flex flex-col gap-6 max-w-[1216px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold">We use cookies</h2>
          <div className="text-gray-600">
            We use cookies to enhance your browsing experience and improve our
            website&apos;s performance. By continuing to use this site, you
            consent to the use of cookies. To learn more about how we use
            cookies and your options, please read our cookie policy.
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row-reverse md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row">
            <Button
              className="bg-blue-800"
              onClick={() => console.log("clicked")}
            >
              Allow Cookies
            </Button>
            <Button
              className="bg-white border-2 shadow-sm text-black"
              onClick={onManage}
            >
              Manage Cookies
            </Button>
          </div>
          <Button className="bg-red-500" onClick={onDeclineAll}>
            Decline All
          </Button>
        </div>
      </div>
    </div>
  );
}
