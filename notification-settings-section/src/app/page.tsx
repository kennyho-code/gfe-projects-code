"use client";
import { useState } from "react";

type NotificationTypes = {
  push: boolean;
  email: boolean;
  sms: boolean;
};

type Setting = {
  label: string;
  notificationTypes: NotificationTypes;
};

const notificationTypes = {
  push: false,
  email: false,
  sms: false,
};

// actually retrieve this from the server
const defaultSettings: Setting[] = [
  {
    label: "Marketing & promotional content",
    notificationTypes: { ...notificationTypes },
  },
  { label: "Feature updates", notificationTypes: { ...notificationTypes } },
  { label: "Comments", notificationTypes: { ...notificationTypes } },
  {
    label: "Updates from friends",
    notificationTypes: { ...notificationTypes },
  },
  { label: "Friends requests", notificationTypes: { ...notificationTypes } },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState(defaultSettings);
  function toggleNewSettings(
    label: string,
    notificationType: "push" | "email" | "sms"
  ) {
    const oldSettingNotificationType = settings.filter(
      (oldSetting) => oldSetting.label === label
    )[0].notificationTypes[notificationType];
    const newSettings = [...settings];
    newSettings.map((newSetting) => {
      if (newSetting.label === label) {
        newSetting.notificationTypes[notificationType] =
          !oldSettingNotificationType;
      }

      return newSetting;
    });
    setSettings(newSettings);
  }

  function saveSettings() {
    // make an api call here...to save the settings
  }
  return (
    <main className="min-h-screen flex justify-center">
      <div className="p-4 mt-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Manage Your Notifications</h1>
          <p className="text-gray-500">
            Choose how you want to be notified about the latest updates and
            messages.
          </p>
        </div>
        <div>
          <div className="flex justify-end gap-4 mt-8">
            <div className="font-bold">Push</div>
            <div className="font-bold">Email</div>
            <div className="font-bold">SMS</div>
          </div>
          <div className="my-4">
            <hr />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {settings.map((setting) => (
              <span className="flex justify-between gap-4" key={setting.label}>
                <div className="text-gray-600">{setting.label}</div>
                <div className="flex gap-4">
                  <Switch
                    onClick={() => {
                      toggleNewSettings(setting.label, "push");
                    }}
                    label={setting.label}
                    isNotificationOn={setting.notificationTypes.push}
                  />
                  <Switch
                    onClick={() => {
                      toggleNewSettings(setting.label, "email");
                    }}
                    label={setting.label}
                    isNotificationOn={setting.notificationTypes.email}
                  />
                  <Switch
                    onClick={() => {
                      toggleNewSettings(setting.label, "sms");
                    }}
                    label={setting.label}
                    isNotificationOn={setting.notificationTypes.sms}
                  />
                </div>
              </span>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              disabled={true} // we actually want to compare it the save settings retrieved from the backend
              onClick={saveSettings}
              className="px-6 py-3 bg-gray-100 rounded-md text-gray-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function clsx(...classNames: string[]) {
  return classNames.filter(Boolean).join(" ");
}

function Switch({
  onClick,
  isNotificationOn,
  label,
}: {
  onClick: () => void;
  isNotificationOn: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={`turn ${isNotificationOn ? "of" : "on"} ${label} setting`}
      className={clsx(
        "w-[36px] h-[20px] rounded-full flex justify-end items-center",
        isNotificationOn ? "bg-blue-500" : "bg-gray-200"
      )}
    >
      <div
        className={clsx(
          "w-[16px] h-[16px] rounded-full mr-1",
          isNotificationOn ? "bg-white" : "bg-gray-500"
        )}
      />
    </button>
  );
}
