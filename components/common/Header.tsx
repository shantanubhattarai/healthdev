import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between px-4 lg:px-8 py-2 items-center">
      <Link href="/" className="font-semibold text-lg py-2">
        HealthDev
      </Link>
      <nav>
        <ul className="flex">
          <Link className="px-4 py-2 font-medium" href="/">
            About
          </Link>
          <Link className="px-4 py-2 font-medium" href="/">
            Services
          </Link>
          <Link className="px-4 py-2 font-medium" href="/">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
