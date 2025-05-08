import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-4 lg:px-0 py-4 items-center container mx-auto">
      <Link href="/" className="font-semibold text-lg py-1">
        HealthDev
      </Link>
      <nav>
        <ul className="flex gap-2">
          <Link
            className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
            href="/"
          >
            About
          </Link>
          <Link
            className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
            href="/"
          >
            Services
          </Link>
          <Link
            className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-green-800 transition-all"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
