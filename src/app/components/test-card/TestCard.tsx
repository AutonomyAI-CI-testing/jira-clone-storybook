import type { SVGProps } from "react";

/**
 * TestCard
 *
 * Smoke-test reproduction of the attached Figma frame ("UI magician Agent") as one
 * self-contained component: no props, no state, no data, not wired into any route.
 * It exists so the design-to-component path can be checked end to end.
 *
 * The frame is a dark panel that corresponds to none of the app's themes, so its
 * colours come from the raw palette variables in `src/app/styles/app.css` (the dark
 * neutral and red ramps) rather than the semantic theme tokens, which would render
 * the panel in whichever theme happens to be active.
 */

const baseIconProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...props}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...baseIconProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({ id, label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <InfoIcon className="h-4 w-4 shrink-0" />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="mt-3 h-[58px] w-full rounded-lg border border-[var(--Neutral500)] bg-[var(--DarkNeutral0)] px-4 text-base outline-none placeholder:text-[var(--Neutral500)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 hover:bg-[var(--DarkNeutral200)]"
      >
        <GearIcon className="h-[22px] w-[22px]" />
      </button>
    </div>

    <button type="button" className="mt-8 flex items-center gap-3 text-left text-sm">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="truncate">From entire frame to a singl…</span>
    </button>

    <button
      type="button"
      className="mt-24 flex items-center gap-3 text-left font-primary-bold text-lg"
    >
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <span>Add New Design</span>
    </button>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      className="mt-10"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-6"
    />

    <div className="mt-8 flex gap-9 pl-12">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[60px] w-[170px] rounded-lg bg-[var(--Red800)] text-base hover:bg-[var(--Red900)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);
