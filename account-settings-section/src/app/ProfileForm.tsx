"use client";

import {
  FormEvent,
  DetailedHTMLProps,
  LabelHTMLAttributes,
  ReactNode,
  InputHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";
import { User } from "./page";

function ProfileForm({
  defaultData,
}: {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  defaultData: User;
}) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("first-name-input");
    const lastName = formData.get("last-name-input");
    const email = formData.get("email-input");
    const username = formData.get("username-input");

    const response = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
      }),
    });

    console.log(response);
    if (response.ok) {
      alert("success!");
    } else {
      alert("error");
    }
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex gap-8">
        <div className="grow">
          <Label htmlFor="first-name-input">First name</Label>
          <Input
            type="text"
            id="first-name-input"
            name="first-name-input"
            defaultValue={defaultData.firstName}
            className="w-full"
          />
        </div>

        <div className="grow">
          <Label htmlFor="last-name-input">Last name</Label>
          <Input
            type="text"
            id="last-name-input"
            name="last-name-input"
            defaultValue={defaultData.lastName}
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email-input">Email</Label>
        <Input
          id="email-input"
          name="email-input"
          type="email"
          defaultValue={defaultData.email}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="username-input">Username</Label>
        <Input
          type="text"
          id="username-input"
          name="username-input"
          defaultValue={defaultData.username}
          className="w-full"
        />
      </div>

      <div className="text-gray-500">
        Allows others to find and interact with you easily.
      </div>
      <div className="flex justify-center">
        <button className="bg-gray-100 text-gray-500 px-8 py-4  rounded-lg">
          Save Changes
        </button>
      </div>
    </form>
  );
}

interface LabelProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
  className?: string;
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-gray-500 font-semibold" {...props}>
      {children}
    </label>
  );
}

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        "p-2 border-2 rounded-lg bg-gray-50 text-gray-500 block",
        className,
      )}
      {...props}
    />
  );
}

export default ProfileForm;
