"use client";
import { useState } from "react";

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [newPasswordValue, setNewPasswordValue] = useState("");
  return (
    <div className="p-4">
      <main className="flex flex-col gap-6 text-gray-600">
        <header>
          <h1 className="text-2xl font-semibold text-black">Manage Security</h1>
          <div className="text-gray-600">
            Protect your data and ensure secure interactions.
          </div>
        </header>
        <form className="flex flex-col gap-6">
          <div>
            <Label htmlFor="current-password-input">Current password</Label>
            <Input
              placeholder="Enter your current password"
              name="current-password-input"
            />
          </div>

          <div>
            <Label htmlFor="new-password-input">New password</Label>
            <Input
              value={newPasswordValue}
              onChange={(e) => {
                setNewPasswordValue(e.currentTarget.value);
              }}
              placeholder="Enter your new password"
              name="new-password-input"
            />
          </div>

          <PasswordValidator password={newPasswordValue} />
          <div>
            <Label htmlFor="confirm-new-password-input">
              Confirm new password
            </Label>
            <Input
              placeholder="Repeat your new password"
              name="new-password-input"
            />
          </div>
          <div>
            <button className="float-right border-2 rounded-md px-4 py-2 bg-gray-50">
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

function PasswordValidator({ password }: { password: string }) {
  const checks = [
    {
      fn: (s: string) => s.length >= 8 && s.length <= 64,
      label: "8 - 64 characters",
    },
    { fn: (s: string) => /[A-Z]/.test(s), label: "One uppercase letter" },
    { fn: (s: string) => /[a-z]/.test(s), label: "One lowercase letter" },
    { fn: (s: string) => /\d/.test(s), label: "One number" },
    {
      fn: (s: string) => /[!@#$%^&*]/.test(s),
      label: "One special character (e.g., ! @ # $ % ^ & *)",
    },
  ];
  return (
    <ul className="flex flex-col gap-4">
      {checks.map((check) => (
        <li className="flex gap-2" key={check.label}>
          {check.fn(password) ? <div>✅</div> : <div>✔️</div>}
          <div>{check.label}</div>
        </li>
      ))}
    </ul>
  );
}

function Input({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={twMerge(
        "w-full border-2 inline-flex rounded-md justify-between overflow-hidden",
        isFocused && "border-blue-500 ",
      )}
    >
      <input
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        type={hidePassword ? "password" : "text"}
        className="w-full bg-gray-50 px-2 py-2 outline-none"
        {...props}
      />
      <div className="p-2 bg-gray-50 flex justify-center items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setHidePassword(!hidePassword);
          }}
        >
          {hidePassword ? <span>🫣</span> : <span>👁️</span>}
        </button>
      </div>
    </div>
  );
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label className="font-semibold" {...props}>
      {children}
    </label>
  );
}
