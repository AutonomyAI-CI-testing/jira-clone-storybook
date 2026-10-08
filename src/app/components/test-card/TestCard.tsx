/**
 * TestCard
 *
 * Static reproduction of the Figma "Add New Design" panel (Test Page — Simple).
 * Smoke test only: self-contained, accepts no props, no state, no interactivity.
 * Colours/spacing/typography are approximations read off the frame image.
 */

import type { ReactNode } from "react";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

const CaretUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3 text-[15px] text-[#c9c9c9]">
    <span>{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="mx-auto flex min-h-screen w-full max-w-[508px] flex-col bg-[#1c1c1c] px-6 py-8 text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">UI magician Agent</h1>
      <span className="text-[#c9c9c9]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2 text-[15px] text-[#b0b0b0]">
      <CaretUpIcon />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <CaretUpIcon />
      <h2 className="text-lg font-semibold">Add New Design</h2>
    </div>

    <div className="mt-7 flex flex-col gap-2">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="h-11 w-full rounded-sm border border-[#4a4a4a] bg-[#2a2a2a] px-3 text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="h-11 w-full rounded-sm border border-[#4a4a4a] bg-[#2a2a2a] px-3 text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-8 flex items-center gap-5">
      <button
        type="button"
        className="rounded-md bg-[#a4441f] px-6 py-3 text-[15px] font-semibold text-[#e8d8d0]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-md bg-[#a4441f] px-6 py-3 text-[15px] font-semibold text-[#e8d8d0]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-lg font-semibold">Recent Breakdowns</h2>
  </div>
);
