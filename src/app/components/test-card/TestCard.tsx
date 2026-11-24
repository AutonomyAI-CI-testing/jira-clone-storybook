import cx from "classix";
import type { ReactNode } from "react";

/**
 * Self-contained recreation of the cropped Figma frame ("UI magician Agent").
 * Smoke test only: no props, no state, no data.
 *
 * Deliberate approximations, per the brief: the design's Inter typeface is not
 * loaded in this repo, so the app's own font stack carries the design's sizes;
 * the icons are drawn inline because the design's exports are flattened bitmap
 * crops rather than vectors; and the design's colours are written as literal
 * values because this repo's Tailwind palette carries semantic tokens only.
 */

const FIELD_INPUT_CLASS =
  "h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

interface IconButtonProps {
  label: string;
  className?: string;
  children: ReactNode;
}

function IconButton({ label, className, children }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cx(
        "flex shrink-0 cursor-pointer items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}

function SettingsIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M1.5 6.5 6 2l4.5 4.5" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="7.5" cy="7.5" r="6.4" />
      <path d="M7.5 7v3.6" strokeLinecap="round" />
      <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

function Field({ label, placeholder, className, inputClassName }: FieldProps) {
  return (
    <div className={cx("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-6">
        <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
          {label}
        </span>
        <IconButton
          label={`About ${label.toLowerCase()}`}
          className="text-[#a5adad]"
        >
          <InfoIcon />
        </IconButton>
      </div>
      <input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className={cx(FIELD_INPUT_CLASS, inputClassName)}
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-16 font-primary"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <IconButton label="Settings" className="text-[#b5b5b5]">
          <SettingsIcon />
        </IconButton>
      </div>

      <div className="mt-[18px] flex items-center gap-2 pl-1">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-[77px] flex items-center gap-1.5 pl-1.5 text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        <ChevronUpIcon className="h-2 w-3 shrink-0" />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-7"
      />
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px]"
        inputClassName="h-[37px] border-2 border-[#929291] px-5 text-[10.5px]"
      />

      <div className="mt-[23px] flex gap-[17px] pl-6">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
