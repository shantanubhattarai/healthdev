"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Banner = ({
  mainText,
  urlText,
  url,
}: {
  mainText: string;
  urlText: string;
  url: string;
}) => {
  const { highlightLinks } = usePrefs();
  return (
    <div className="flex items-center rounded-md justify-between gap-x-2 lg:gap-x-12 px-6 lg:px-16 py-8 bg-sky-800 bg-noise bg-blend-multiply text-white">
      <p>{mainText}</p>
      <Link
        className={cn(
          "bg-sky-600 ring ring-sky-500 hover:ring-sky-400 hover:bg-sky-500 active:ring-sky-600 active:bg-sky-900 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide shrink-0",
          highlightLinks && "underline underline-offset-2"
        )}
        href={url}
      >
        {urlText}
      </Link>
    </div>
  );
};

export default Banner;
