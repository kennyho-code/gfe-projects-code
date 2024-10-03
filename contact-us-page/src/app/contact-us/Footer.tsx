import React from "react";
import Link from "next/link";

const footerLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "YouTube", emoji: "▶️", href: "#" },
  { name: "Instagram", emoji: "📷", href: "#" },
  { name: "Facebook", emoji: "👍", href: "#" },
  { name: "GitHub", emoji: "🐙", href: "#" },
  { name: "Twitter", emoji: "🐦", href: "#" },
];

function Footer() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center gap-8 mb-8">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-6">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-2xl hover:opacity-75 transition-opacity"
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.emoji}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-gray-500 text-sm">
          © 2024 Abstractly, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
