import type { ReactNode } from "react";

// Palette read off the source Figma frame; this panel is external to the app's
// design system, so no semantic token covers these values.
const HEADING_TEXT = "#C9C9C9";

const GearIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke={HEADING_TEXT}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 8.9 4.6h.09A1.7 1.7 0 0 0 10.02 3.04V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.05 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 8.9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z" />
  </svg>
);

const ChevronUpIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={HEADING_TEXT}
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke={HEADING_TEXT}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="font-primary-bold text-[28px] leading-none text-[#C9C9C9]">
    {children}
  </h2>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <>
    <div className="flex items-center gap-4 pl-3">
      <label
        htmlFor={id}
        className="font-primary text-[22px] leading-none text-[#9A9A9A]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-5 h-[72px] w-full rounded-sm border border-[#9E9E9E] bg-[#262626] px-9 font-primary text-[20px] text-[#C9C9C9] outline-none placeholder:text-[#8A8A8A]"
    />
  </>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[68px] w-[170px] rounded-md bg-[#A34715] font-primary text-[22px] text-[#B8B8B8]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1E1E1E] px-10 pt-10 pb-28 font-primary"
  >
    <div className="flex items-center justify-between">
      <SectionHeading>UI magician Agent</SectionHeading>
      <GearIcon />
    </div>

    <div className="mt-3 flex items-center gap-4 pl-3">
      <ChevronUpIcon size={20} />
      <p className="max-w-[330px] truncate font-primary text-[20px] text-[#9A9A9A]">
        From entire frame to a single component
      </p>
    </div>

    <div className="mt-[150px] flex items-center gap-4 pl-3">
      <ChevronUpIcon size={28} />
      <SectionHeading>Add New Design</SectionHeading>
    </div>

    <div className="mt-12">
      <Field
        id="figma-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="figma-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-14 flex gap-9 pl-12">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <div className="mt-24">
      <SectionHeading>Recent Breakdowns</SectionHeading>
    </div>
  </div>
);
