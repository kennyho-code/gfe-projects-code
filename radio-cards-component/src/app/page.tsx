"use client";
import { InputHTMLAttributes, useState } from "react";

function clsx(...classNames: any[]) {
  return classNames.filter(Boolean).join(" ");
}

export default function Home() {
  const [activeElement, setActiveElement] = useState<null | string>(null);

  return (
    <div className="flex justify-center items-center ">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.currentTarget.value);
          }}
        >
          <fieldset className="flex flex-col gap-5">
            <RadioInput
              onClick={() => {
                setActiveElement("1");
              }}
              checked={activeElement === "1"}
              value="1"
            />

            <RadioInput
              checked={activeElement === "2"}
              onClick={() => {
                setActiveElement("2");
              }}
              value="2"
            />

            <RadioInput
              checked={activeElement === "3"}
              onClick={() => {
                setActiveElement("3");
              }}
              value="3"
            />
          </fieldset>

          <button
            className="bg-blue-50 border-2 rounded-lg px-4 py-2"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.value);
        }}
      >
        <fieldset>
          <legend>Please select your preferred contact method:</legend>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
            />
            <label htmlFor="contactChoice1">Email</label>

            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            <label htmlFor="contactChoice2">Phone</label>

            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="mail"
            />
            <label htmlFor="contactChoice3">Mail</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

function RadioInput({
  onClick,
  checked,
  value,
  ...props
}: {
  onClick: () => void;
  checked: boolean;
  value: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <input
      value={value}
      onClick={onClick}
      type="radio"
      className={clsx(
        " caret-transparent inline-flex text-center justify-center items-center cursor-pointer border-2 px-4 py-2",
        checked && "border-blue-600"
      )}
      {...props}
    />
  );
}
