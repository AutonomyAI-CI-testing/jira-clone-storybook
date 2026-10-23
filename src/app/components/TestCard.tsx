import type { ReactNode } from "react";

import { Button } from "./button";

const inputClassName =
  "mt-2.5 w-full rounded bg-background-input px-3 py-2 font-primary text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

const buttonClassName = "w-[85px] py-2 font-primary text-2xs";

const Glyph = ({ children, size = 16 }: GlyphProps) => (
  <svg
    aria-hidden="true"
    className="shrink-0 text-icon-subtle"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.75"
    viewBox="0 0 24 24"
    width={size}
  >
    {children}
  </svg>
);

const GearGlyph = () => (
  <Glyph>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Glyph>
);

const InfoGlyph = () => (
  <Glyph size={15}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Glyph>
);

const ChevronUpGlyph = () => (
  <Glyph>
    <path d="m18 15-6-6-6 6" />
  </Glyph>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex justify-center bg-elevation-surface-sunken p-2"
  >
    <div className="w-[254px] rounded-md bg-elevation-surface-overlay p-5 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-sm text-font">
          UI magician Agent
        </h2>
        <GearGlyph />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUpGlyph />
        <span className="truncate font-primary text-xs text-font-subtlest">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <ChevronUpGlyph />
        <h3 className="font-primary-bold text-sm text-font">Add New Design</h3>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <label
            className="font-primary text-xs text-font-subtle"
            htmlFor="testcard-token"
          >
            Personal Access Token
          </label>
          <InfoGlyph />
        </div>
        <input
          className={inputClassName}
          id="testcard-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            className="font-primary text-xs text-font-subtle"
            htmlFor="testcard-url"
          >
            Design URL
          </label>
          <InfoGlyph />
        </div>
        <input
          className={inputClassName}
          id="testcard-url"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      <div className="mt-5 flex gap-4">
        <Button
          className={buttonClassName}
          color="warning"
          variant="contained"
        >
          Awesome
        </Button>
        <Button
          className={buttonClassName}
          color="warning"
          variant="contained"
        >
          Prepare
        </Button>
      </div>

      <h3 className="mt-12 font-primary-bold text-sm text-font">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);

interface GlyphProps {
  children: ReactNode;
  size?: number;
}
