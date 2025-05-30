import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { SquareArrowOutUpRight } from "lucide-react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 pt-12 pb-8">
      <div className="flex flex-col lg:flex-row items-start justify-start gap-x-4 lg:gap-x-16 gap-y-4">
        <div>
          <h3 className="font-medium text-lg mb-4">Links</h3>
          <ul className="flex flex-col gap-2 text-zinc-700">
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-2"
            >
              About
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
              Make a referral
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-2"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Services</h3>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-x-4 lg:gap-x-16 gap-y-2">
            <ul className="flex flex-col gap-2 text-zinc-700">
              <Link
                href="/services/sda"
                className="hover:underline hover:underline-offset-2"
              >
                Specialist Disability Accommodation
              </Link>
              <Link
                href="/services/sil"
                className="hover:underline hover:underline-offset-2"
              >
                Supported Independent Living
              </Link>
              <Link
                href="/services/sta"
                className="hover:underline hover:underline-offset-2"
              >
                Respite Care & Short-Term Accommodation
              </Link>
              <Link
                href="/services/fds"
                className="hover:underline hover:underline-offset-2"
              >
                Forensic Disability Services
              </Link>
              <Link
                href="/services/htoh"
                className="hover:underline hover:underline-offset-2"
              >
                Hospital to Home
              </Link>
              <Link
                href="/services/cn"
                className="hover:underline hover:underline-offset-2"
              >
                Community Nursing
              </Link>
            </ul>

            <ul className="flex flex-col gap-2 text-zinc-800">
              <Link
                href="/services/adl"
                className="hover:underline hover:underline-offset-2"
              >
                Assistance with Daily Living
              </Link>
              <Link
                href="/services/scp"
                className="hover:underline hover:underline-offset-2"
              >
                Community Participation
              </Link>
              <Link
                href="/services/group"
                className="hover:underline hover:underline-offset-2"
              >
                Group Activities
              </Link>
              <Link
                href="/services/transport"
                className="hover:underline hover:underline-offset-2"
              >
                Transport Assistance
              </Link>
              <Link
                href="/services/household"
                className="hover:underline hover:underline-offset-2"
              >
                Household Assistance
              </Link>
              <Link
                href="/services"
                className="hover:underline hover:underline-offset-2 inline-flex items-center justify-start gap-x-2"
              >
                <span>All Services</span>
                <SquareArrowOutUpRight size={14} />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between items-center py-4 my-4 border-t border-b">
        <Link href="/" className="font-semibold text-lg py-1">
          Apex Aid
        </Link>
        <ul className="flex gap-6 items-center justify-end">
          <SiFacebook />
          <SiInstagram />
          <SiWhatsapp />
        </ul>
      </div>
      <p className="text-right text-zinc-500">
        &copy; 2025 Apex Aid Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
