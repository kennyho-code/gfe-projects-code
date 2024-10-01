import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

interface SocialLink {
  platform: string;
  url: string;
  emoji: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: "YouTube",
    url: "https://www.youtube.com/yourchannel",
    emoji: "📺",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/yourprofile",
    emoji: "📸",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/yourpage",
    emoji: "👥",
  },
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    emoji: "👨‍💻",
  },
  {
    platform: "X (Twitter)",
    url: "https://x.com/yourhandle",
    emoji: "🐦",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col gap-8 items-center py-16">
      <ul className="flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <span className="cursor-pointer hover:text-blue-500">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex space-x-8">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            {link.emoji}
          </Link>
        ))}
      </div>

      <div className="text-gray-600">
        © 2024 Abstractly, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
