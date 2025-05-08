import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 lg:px-0 pt-12 pb-8">
      <div>
        <h3 className="font-medium text-lg mb-4">Links</h3>
        <ul className="flex flex-col gap-2 text-zinc-700">
          <Link
            href="/about"
            className="hover:underline hover:underline-offset-2"
          >
            About
          </Link>
          <Link href="/" className="hover:underline hover:underline-offset-2">
            Services
          </Link>
          <Link
            href="/faq"
            className="hover:underline hover:underline-offset-2"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="hover:underline hover:underline-offset-2"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div className="flex gap-8 justify-between items-center py-4 px-4 my-4 border-t border-b">
        <Link href="/" className="font-semibold text-lg py-1">
          HealthDev
        </Link>
        <ul className="flex gap-6 items-center justify-end">
          <SiFacebook />
          <SiInstagram />
          <SiWhatsapp />
        </ul>
      </div>
      <p className="text-right text-zinc-500">
        &copy; 2025 Health. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
