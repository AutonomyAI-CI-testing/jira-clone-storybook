import { useId } from "react";
import cx from "classix";

/**
 * TestCard
 *
 * A self-contained, presentational reproduction of a Figma frame, kept as a
 * smoke test for the design-to-component path. It takes no props, holds no
 * state and is not wired into the app.
 *
 * Styling note: `theme.colors`, `theme.fontFamily` and `theme.fontSize` are
 * full overrides in `tailwind.config.js`, so stock palette and font utilities
 * (`bg-gray-800`, `font-sans`) compile to nothing here. The reference is a
 * fixed dark surface, so its colours are expressed as arbitrary values.
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[508px] bg-[#1e1e1e] px-[38px] pb-[140px] pt-[52px] font-primary text-[#d0d0d0]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-[19px] text-[#e8e8e8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Open settings"
            className="flex cursor-pointer items-center justify-center text-[#c8a679]"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed section row */}
        <div className="mt-8 flex items-center gap-3 text-[16px] text-[#9a9a9a]">
          <ChevronUpIcon className="h-5 w-5 shrink-0" />
          <span>From entire frame to a singl...</span>
        </div>

        <div className="h-[150px]" />

        {/* Section heading */}
        <div className="flex items-center gap-3">
          <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#ededed]" />
          <h2 className="font-primary-bold text-[22px] text-[#ededed]">
            Add New Design
          </h2>
        </div>

        {/* Fields */}
        <Field
          className="mt-10"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          className="mt-6"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        {/* Actions */}
        <div className="mt-10 flex gap-7 pl-[50px]">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Closing heading */}
        <h2 className="mt-24 font-primary-bold text-[22px] text-[#ededed]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => {
  const id = useId();

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-[15px] text-[#d0d0d0]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-4 h-[62px] w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-5 font-primary text-[16px] text-[#d0d0d0] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="w-[170px] cursor-pointer rounded bg-[#a04a22] py-3 font-primary-bold text-[17px] text-[#d6cdc6]"
  >
    {children}
  </button>
);

type IconProps = { className?: string };

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-5 w-5", className)}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    className="h-[22px] w-[22px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
