import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex xl:flex-row flex-col p-4 min-h-screen max-w-[1440px]">
      <div className=" flex xl:mr-4 flex-col justify-center gap-8 xl:w-[592px]">
        <h2 className="font-semibold text-3xl">
          Get the finest curated abstracts delivery weekly to your inbox
        </h2>

        <ul className="flex flex-col gap-6">
          <ListItem>
            Exclusive access to new abstract images and collections
          </ListItem>
          <ListItem>Unlock special promotions only for subscribers</ListItem>
          <ListItem>Regular doses of artistic inspiration</ListItem>
        </ul>

        <form className="flex flex-col xl:flex-row gap-2">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6 w-full">
              <input
                aria-label="email"
                type="email"
                required
                aria-describedby="email-error"
                className="border-2 h-[40px] rounded-lg  p-4 leading-5 outline-none"
                placeholder="Enter your email"
              />
              <p id="email-error"></p>
            </div>
            <p className="font-light text-base text-gray-600">
              We only send you the best!. No spam.
            </p>
          </div>
          <button
            type="submit"
            className="border-none rounded-lg px-4 py-2 h-[40px] inline-flex justify-center padding-0 items-center leading-5 bg-blue-600 text-white"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-center">
        <img
          alt="Picture of abstract graphics"
          src={"/abstract.jpg"}
          className="rounded-lg xl:mt-0 mt-4   xl:h-[608px] h-[288px] object-cover"
        />
      </div>
    </main>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="bg-blue-100 rounded-full mr-2">✔️</span>
      <span className="font-light text-base text-gray-600">{children}</span>
    </li>
  );
}
