import Image from "next/image";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex xl:flex-row  flex-col p-4 xl:h-screen">
      <div className="xl:p-4  flex flex-col justify-center gap-8 ">
        <h1 className="font-semibold text-3xl">
          Get the finest curated abstracts delivery weekly to your inbox
        </h1>

        <ul className="flex flex-col gap-6">
          <ListItem>
            Exclusive access to new abstract images and collections
          </ListItem>
          <ListItem>Unlock special promotions only for subscribers</ListItem>
          <ListItem>Regular doses of artistic inspiration</ListItem>
        </ul>

        <form className="flex flex-col xl:flex-row gap-2">
          <div className="flex flex-col">
            <input
              aria-label="email"
              type="text"
              className="border-2 h-[40px] rounded-lg p-6"
              placeholder="Enter your email"
            />
            <p className="font-light text-base text-gray-600">
              We only send you the best!. No spam.
            </p>
          </div>
          <button
            type="submit"
            className="border-2 rounded-lg px-4 py-2 h-[40px]"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col justify-center">
        <Image
          alt="Picture of abstract graphics"
          src={"/abstract.jpg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg xl:mt-0 mt-4"
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
