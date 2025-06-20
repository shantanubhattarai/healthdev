"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

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
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="border border-zinc-300 rounded-sm p-2 flex items-center justify-start gap-2 w-full">
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
      </div>
      <section className="flex flex-col gap-4 mt-4">
        <h4 className="border-b pb-2">Referrer Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Referrer name"
            name="referrer-name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Organization<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Referrer organization"
            name="referrer-organization"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Phone Number<span className="text-red-700">*</span>
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Referrer phone number"
              required
              name="referrer-phone"
            />
          </div>
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Email<span className="text-red-700">*</span>
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Referrer email address"
              required
              name="referrer-email"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            What services are you interested in?
          </label>
          <ul>
            {interestedServices.map((item) => (
              <li
                key={`interested-service-${item.value}`}
                className="flex items-start md:items-center space-x-2"
              >
                <input
                  type="checkbox"
                  id={`check-${item.value}`}
                  className="mt-1 md:mt-0"
                />
                <label
                  htmlFor={`check-${item.value}`}
                  className="text-zinc-800"
                >
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <h4 className="border-b pb-2">Participant Details</h4>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Full Name<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Participant name"
            name="participant-name"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Date of Birth<span className="text-red-700">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="border border-zinc-300 rounded-sm p-2 flex items-center justify-start gap-2 w-full">
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
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Gender
            </label>
            <div className="flex space-x-2 wrap">
              <div className="flex space-x-1 items-center">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-male"
                  name="participant-gender"
                />
                <label htmlFor="gender-male" className="text-zinc-800">
                  Male
                </label>
              </div>
              <div className="flex space-x-1 items-center">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-female"
                  name="participant-gender"
                />
                <label htmlFor="gender-female" className="text-zinc-800">
                  Female
                </label>
              </div>
              <div className="flex space-x-1 items-center grow">
                <input
                  className="border border-zinc-300"
                  type="radio"
                  id="gender-unanswered"
                  name="participant-gender"
                />
                <label htmlFor="gender-unanswered" className="text-zinc-800">
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Phone Number
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Participant phone number"
              name="participant-phone"
            />
          </div>
          <div>
            <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
              Email
            </label>
            <input
              className="border border-zinc-300 rounded-sm p-2 block w-full"
              placeholder="Participant email address"
              name="participant-email"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Address
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="Participant address"
            name="participant-address"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Reason for referral<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="What is the reason for referral?"
            required
            name="reason"
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            What is the disability?<span className="text-red-700">*</span>
          </label>
          <input
            className="border border-zinc-300 rounded-sm p-2 block w-full"
            placeholder="What is the disability?"
            required
            name="disability"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Where did you hear about us?
          </label>
          <div className="flex flex-col md:flex-row space-x-2 wrap">
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-google"
                name="heard"
              />
              <label htmlFor="heard-google" className="text-zinc-800">
                Google
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-facebook"
                name="heard"
              />
              <label htmlFor="heard-facebook" className="text-zinc-800">
                Facebook
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-instagram"
                name="heard"
              />
              <label htmlFor="heard-instagram" className="text-zinc-800">
                Instagram
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="heard-colleague"
                name="heard"
              />
              <label htmlFor="heard-colleague" className="text-zinc-800">
                Colleague or Friend
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Enquiry<span className="text-red-700">*</span>
          </label>
          <textarea
            placeholder="Any additional information you would like to send"
            className="border border-zinc-300 rounded-sm p-2 block w-full resize-none"
            rows={5}
            name="enquiry"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-zinc-600 text-sm tracking-wide">
            Who should we contact?
          </label>
          <div className="flex flex-col md:flex-row space-x-2 wrap">
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="contact-participant"
                name="contact-who"
              />
              <label htmlFor="contact-participant" className="text-zinc-800">
                Contact participant directly
              </label>
            </div>
            <div className="flex space-x-1 items-center">
              <input
                className="border border-zinc-300"
                type="radio"
                id="contact-referrer"
                name="contact-who"
              />
              <label htmlFor="contact-referrer" className="text-zinc-800">
                Contact referrer
              </label>
            </div>
          </div>
        </div>
      </section>
      <button
        className="text-medium bg-brand-800 bg-noise bg-blend-color-burn text-white px-6 py-2 rounded-sm tracking-wide text-sm cursor-pointer ring ring-brand-600 hover:bg-brand-700 active:bg-brand-900 transition-all"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ReferralForm;
