"use client";
import { usePrefs } from "@/app/context/PrefContext";
import {
  AArrowUpIcon,
  CodeIcon,
  MenuIcon,
  SettingsIcon,
  TypeIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    headerRef.current.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        headerRef.current?.classList.toggle(
          "sticking-nav",
          !entries[0].isIntersecting
        );
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);

    return () => {
      navObserver.unobserve(scrollWatcher);
    };
  }, [headerRef]);

  function toggleNav() {
    if (!mobileNavRef.current) return;
    mobileNavRef.current.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
  }

  return (
    <header
      className="w-full container sticky mx-auto top-0 z-50 px-4 py-4 md:py-0"
      ref={headerRef}
    >
      <div className="py-1 md:py-4 flex flex-col md:flex-row md:justify-between md:items-center nav-wrapper transition-all relative">
        <div className="w-full flex gap-x-2 justify-between py-1 items-center">
          <Link href="/" className="font-semibold text-lg">
            Apex Aid
          </Link>
          <div className="flex gap-x-4 justify-start items-center md:hidden">
            <AccessibilityWidget />
            <button onClick={toggleNav}>
              <MenuIcon />
            </button>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            <AccessibilityWidget />
            <Link
              className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
              href="/about"
            >
              About
            </Link>
            <Link
              className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
              href="/referral"
            >
              Referral
            </Link>
            <Link
              className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
              href="/contact"
            >
              Contact
            </Link>
          </ul>
        </nav>
        <nav
          ref={mobileNavRef}
          className="hidden fixed bg-white inset-0 w-full h-full px-4 py-4"
        >
          <div className="flex flex-col justify-start h-full gap-y-24">
            <div className="w-full flex gap-x-2 justify-between py-2 mobile-nav-wrapper items-center">
              <Link href="/" className="font-semibold text-4xl">
                Apex Aid
              </Link>
              <button onClick={toggleNav}>
                <XIcon />
              </button>
            </div>
            <ul className="flex flex-col items-start gap-y-6 mt-4 px-2 text-3xl">
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
                href="/"
                onClick={toggleNav}
              >
                Home
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
                href="/about"
                onClick={toggleNav}
              >
                About
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
                href="/services"
                onClick={toggleNav}
              >
                Services
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
                href="/referral"
                onClick={toggleNav}
              >
                Referral
              </Link>
              <Link
                className="px-2 py-1 font-medium border-b-2 border-transparent hover:border-brand-800 transition-all"
                href="/contact"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

const AccessibilityWidget = () => {
  const {
    font,
    changeFont,
    largeText,
    changeLargeText,
    largeTracking,
    changeLargeTracking,
  } = usePrefs();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SettingsIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-zinc-700">
          Accessibility Settings
        </DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={font === "dyslexic"}
          onCheckedChange={() =>
            changeFont(font === "dyslexic" ? "default" : "dyslexic")
          }
          className="text-md"
        >
          <TypeIcon />
          <span>Dyslexia Friendly</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-md"
          checked={largeText === true}
          onCheckedChange={() => changeLargeText(!largeText)}
        >
          <AArrowUpIcon />
          <span>Bigger Text</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="text-md"
          checked={largeTracking === true}
          onCheckedChange={() => changeLargeTracking(!largeTracking)}
        >
          <CodeIcon />
          <span>Larger spacing</span>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
