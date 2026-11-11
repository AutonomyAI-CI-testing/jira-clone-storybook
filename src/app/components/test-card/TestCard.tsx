import { type ReactNode } from "react";

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" panel from
 * the Figma frame. Self-contained and prop-less on purpose — it exists to prove
 * a Figma frame can be turned into a component that renders, not to be wired
 * into the product.
 *
 * The palette is written as Tailwind arbitrary values rather than semantic
 * tokens: this panel is a dark, rust-accented surface that has no equivalent in
 * the app's design system, and `tailwind.config.js` replaces the colour palette
 * wholesale, so stock palette classes (`bg-gray-900`) would emit nothing.
 */

const FIELD_CLASS =
  "mt-3 h-14 w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-4 text-sm text-[#8a8a8a] outline-none placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "h-14 w-[169px] rounded-lg bg-[#9c4420] font-primary-bold text-[15px] text-[#b9aca6]";

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M3 10.5 8 5.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2.5l1.6 2.1 2.6-.6.6 2.6 2.1 1.6-1.5 2.2 1.5 2.2-2.1 1.6-.6 2.6-2.6-.6L12 21.5l-1.6-2.1-2.6.6-.6-2.6-2.1-1.6 1.5-2.2-1.5-2.2 2.1-1.6.6-2.6 2.6.6L12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="10" cy="10" r="8.2" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M10 9.2v4.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="10" cy="6.4" r="0.9" fill="currentColor" />
  </svg>
);

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-[#b0b0b0]">
    <span className="text-sm">{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 pt-10 pb-24 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-lg leading-none">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-9 flex items-center gap-2 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="text-xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-[132px] flex items-center gap-2">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-[17px]">Add New Design</h3>
    </div>

    <div className="mt-[72px]">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        readOnly
        tabIndex={-1}
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-11">
      <FieldLabel>Design URL</FieldLabel>
      <input
        readOnly
        tabIndex={-1}
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-14 flex gap-9 pl-12">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[88px] font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);
