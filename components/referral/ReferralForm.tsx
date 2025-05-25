"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import Select from "react-select";

const interestedServices = [
  {
    value: "Supported Independent Living (SIL)",
    label: "Supported Independent Living (SIL)",
  },
  {
    value: "Respite Care & STA (Short-Term Accommodation)",
    label: "Respite Care & STA (Short-Term Accommodation)",
  },
  {
    value: "Hospital to Home (Transition Support)",
    label: "Hospital to Home (Transition Support)",
  },
  {
    value: "Complex Mental Health (Psychological Disability)",
    label: "Complex Mental Health (Psychological Disability)",
  },
  {
    value: "Social & Community Participation",
    label: "Social & Community Participation",
  },
  {
    value: "Specialist Disability Accommodation (SDA)",
    label: "Specialist Disability Accommodation (SDA)",
  },
  {
    value: "Forensic Disability Services",
    label: "Forensic Disability Services",
  },
  {
    value: "Community Nursing",
    label: "Community Nursing",
  },
  {
    value: "Assistance with Daily Living",
    label: "Assistance with Daily Living",
  },
];

const ReferralForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <button className="border border-zinc-300 rounded-sm p-2 flex items-center justify-start gap-2 min-w-[240px]">
              <CalendarIcon size={16} className="text-zinc-500" />
              {date ? (
                format(date, "PPP")
              ) : (
                <span className="text-zinc-500">Pick a date</span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <section className="flex flex-col gap-4">
        <h4 className="border-b pb-2">Referrer Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Organization
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your organization"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Phone Number
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Email
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            What services are you interested in?
          </label>
          <Select
            isMulti
            classNames={{ control: () => "!rounded-sm" }}
            options={interestedServices}
            instanceId={`interested-service`}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h4 className="border-b pb-2">Participant Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Organization
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your organization"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Email
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your email address"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Phone Number
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Your phone number"
          />
        </div>
      </section>
      <div>
        <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
          Message
        </label>
        <textarea
          placeholder="Any additional information you would like to send"
          className="border border-zinc-300 rounded-sm p-2 block w-full resize-none"
          rows={5}
        />
      </div>
      <button
        className="text-medium bg-amber-800 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-amber-800 hover:ring-amber-600 transition-all"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default ReferralForm;
