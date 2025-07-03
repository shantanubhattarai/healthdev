"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactDetails = ({ horizontal }: { horizontal?: boolean }) => {
  const { highlightLinks } = usePrefs();
  return (
    <ul
      className={cn(
        "flex gap-4",
        horizontal
          ? "flex-col lg:flex-row items-center md:items-start mb-4 lg:mb-0"
          : "flex-col"
      )}
    >
      <li className="flex gap-2 items-center">
        <MapPin size={20} />
        <span>15/16 Charlton Ct, Woolner</span>
      </li>
      <Link
        className={cn(
          "flex gap-2 items-center underline underline-offset-2",
          highlightLinks && "font-semibold"
        )}
        href="tel:123456789#"
      >
        <Phone size={18} />
        <span>1300 675 144</span>
      </Link>
      <Link
        className={cn(
          "flex gap-2 items-center underline underline-offset-2",
          highlightLinks && "font-semibold"
        )}
        href="mailto:info@health.dev"
      >
        <Mail size={18} />
        <span>info@health.dev</span>
      </Link>
    </ul>
  );
};

export default ContactDetails;
