import type { SVGProps } from "react";

/**
 * Smoke-test component: a self-contained reproduction of a cropped Figma frame.
 * It takes no props, holds no state and renders nothing interactive — it exists
 * only to prove the design-to-component path renders end to end.
 */

const IconGear = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const IconInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

type FieldProps = {
  label: string;
  placeholder: string;
};

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <span className="font-primary text-[15px] text-[#c8c8c8]">{label}</span>
      <IconInfo className="h-5 w-5 shrink-0 text-[#c8c8c8]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[66px] w-full border border-[#4a4a4a] bg-[#262626] px-5 font-primary-light text-base text-[#e8e8e8] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[508px] bg-[#1e1e1e] px-10 py-10">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xl text-[#e8e8e8]">
          UI magician Agent
        </span>
        <IconGear className="h-6 w-6 shrink-0 text-[#e8e8e8]" />
      </div>

      <div className="mt-11 flex items-center gap-3">
        <IconChevronUp className="h-4 w-4 shrink-0 text-[#9a9a9a]" />
        <span className="font-primary-light text-sm text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <IconChevronUp className="h-5 w-5 shrink-0 text-[#d0d0d0]" />
        <h2 className="font-primary-bold text-xl text-[#d0d0d0]">
          Add New Design
        </h2>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-14 flex justify-center gap-9">
        {ACTIONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[76px] w-[170px] rounded-lg bg-[#a8431c] font-primary text-base text-[#bfbfbf]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-24 font-primary text-lg text-[#9a9a9a]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
