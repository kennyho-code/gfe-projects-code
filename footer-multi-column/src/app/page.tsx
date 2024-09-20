import Link from "next/link";

type FooterLink = {
  path: string;
  label: string;
};

const category_links: FooterLink[] = [
  { path: "/", label: "Unisex" },
  { path: "/", label: "Men" },
  { path: "/", label: "Women" },
];

const collections_links: FooterLink[] = [
  { path: "/", label: "Latest arrivals" },
  { path: "/", label: "Urban Oasis" },
  { path: "/", label: "Cozy Comfort" },
  { path: "/", label: "Fresh Fusion" },
];

const social_links: FooterLink[] = [
  { path: "/", label: "😍" },
  { path: "/", label: "😭" },
  { path: "/", label: "😊" },
  { path: "/", label: "😒" },
];

export default function Home() {
  return (
    <div className="p-4 flex justify-center">
      <footer className="flex flex-col gap-8 w-[1280px]">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h2 className="font-bold text-2xl">Join our newsletter</h2>
            <div>We’ll send you a nice letter once per week. No spam.</div>
          </div>
          <form className="flex flex-col gap-4 lg:flex-row">
            <input
              className="w-full min-w-[270px] border-2 rounded-md px-4 py-2 bg-gray-50 justify-center items-center"
              placeholder="Enter your email"
              type="text"
              aria-label="email-input"
              name="email-input"
            />
            <button
              className="bg-blue-500 w-full px-4 py-2 rounded-md text-white font-semibold"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 grow">
            <div className="font-bold">StyleNest</div>
            <div>
              Craft stunning style journeys that weave more joy into every
              thread.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="grow">
              <ul className="flex flex-col gap-2">
                <h3 className="text-gray-400">SHOP CATEGORIES</h3>
                {category_links.map((link) => (
                  <Link key={link.label} href={link.path}>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="grow">
              <ul className="flex flex-col gap-2">
                <h3 className="text-gray-400">SHOP COLLECTIONS</h3>
                {collections_links.map((link) => (
                  <Link key={link.label} href={link.path}>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-4 md:flex-row lg:justify-between">
          <div className="text-gray-400">
            © 2024 StyleNest, Inc. All rights reserved.
          </div>
          <ul className="flex gap-4">
            {social_links.map((link) => (
              <Link key={link.label} href={link.path}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
