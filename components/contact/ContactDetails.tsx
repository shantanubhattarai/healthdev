import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex gap-2 items-center">
        <MapPin size={20} />
        <span>15/16 Charlton Ct, Woolner</span>
      </li>
      <Link
        className="flex gap-2 items-center underline underline-offset-2"
        href="tel:123456789#"
      >
        <Phone size={18} />
        <span>1300 675 144</span>
      </Link>
      <Link
        className="flex gap-2 items-center underline underline-offset-2"
        href="mailto:info@health.dev"
      >
        <Mail size={18} />
        <span>info@health.dev</span>
      </Link>
    </ul>
  );
};

export default ContactDetails;
