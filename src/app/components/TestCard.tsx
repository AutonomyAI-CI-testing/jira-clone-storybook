import type { ReactElement } from "react";

const ACTION_BUTTON_CLASSNAME =
  "h-14 rounded-md bg-[#8c3a1c] font-primary text-lg text-[#e0d5cf] transition-colors duration-100 hover:bg-[#a04420] active:bg-[#783012]";

const ChevronUpIcon = ({ size }: ChevronUpIconProps): ReactElement => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    width={size}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={26}
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={26}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 10.5v6" strokeLinecap="round" />
    <path d="M12 7.4v.2" strokeLinecap="round" />
  </svg>
);

const GearIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    fill="none"
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.6}
    viewBox="0 0 24 24"
    width={24}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.08A1.7 1.7 0 0 0 10.12 3V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.08A1.7 1.7 0 0 0 21 10.12h.09a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1.04z" />
  </svg>
);

const LabeledField = ({
  id,
  label,
  placeholder,
}: LabeledFieldProps): ReactElement => (
  <div>
    <div className="flex items-center gap-8">
      <label className="font-primary-bold text-base" htmlFor={id}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      className="mt-4 h-[72px] w-full rounded-[3px] border border-[#8f8f8f] bg-[#2a2a2a] px-8 font-primary text-base text-[#e6e6e6] placeholder:text-[#8f8f8f]"
      id={id}
      name={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

export const TestCard = (): ReactElement => (
  <div
    className="w-[508px] bg-[#1a1a1a] px-[42px] pb-16 pt-10 font-primary text-[#e6e6e6]"
    id="testElem"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        aria-label="Settings"
        className="rounded p-1 text-[#d0d0d0] hover:bg-[#2a2a2a]"
        type="button"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-[#a3a3a3]">
      <ChevronUpIcon size={16} />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon size={22} />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-12 space-y-10">
      <LabeledField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <LabeledField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-9 grid grid-cols-2 gap-9">
      <button className={ACTION_BUTTON_CLASSNAME} type="button">
        Awesome
      </button>
      <button className={ACTION_BUTTON_CLASSNAME} type="button">
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

interface ChevronUpIconProps {
  size: number;
}

interface LabeledFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
