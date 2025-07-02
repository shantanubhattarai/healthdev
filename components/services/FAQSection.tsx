"use client";

import { usePrefs } from "@/app/context/PrefContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FAQSection = () => {
  const { highlightLinks } = usePrefs();
  return (
    <>
      <section className="mt-12 mb-8 px-0 lg:px-8 py-4 lg:py-8 rounded-md lg:bg-zinc-50">
        <h3 className="text-xl lg:text-2xl mb-2 font-semibold text-green-800">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-y-4 justify-start items-start">
          <div className="pt-4">
            <p className="font-medium text-lg text-zinc-800">
              Can I change my support services later?
            </p>
            <p className="text-zinc-900">
              Yes! We will work with you to adjust your supports as your needs
              change.
            </p>
          </div>
          <div>
            <p className="font-medium text-lg text-zinc-800">
              Do you support culturally diverse participants?
            </p>
            <p className="text-zinc-900">
              Absolutely. We respect and celebrate your culture and language,
              and can match you with culturally sensitive staff.
            </p>
          </div>
          <div>
            <p className="font-medium text-lg text-zinc-800">
              How do I get started?
            </p>
            <p className="text-zinc-900">
              Contact our team for a friendly chat — we will guide you through
              every step.
            </p>
          </div>
          <Link
            className={cn(
              "mt-3 font-medium bg-green-700 ring ring-green-600 hover:ring-green-400 hover:bg-green-600 active:ring-green-600 active:bg-green-700 transition-all cursor-pointer px-6 py-2 rounded-sm text-white tracking-wide",
              highlightLinks && "underline underline-offset-2"
            )}
            href="/contact"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
