/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no data. Colours are Tailwind arbitrary
 * values because the frame's palette sits outside the repo's semantic tokens.
 */

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#0d0d0d] px-10 py-10 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center text-[#d5d5d5]"
        >
          <GearIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#9a9a9a]" />
        <span className="truncate text-base text-[#9a9a9a]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#e6e6e6]" />
        <h2 className="font-primary-bold text-xl text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <FormField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-12 flex justify-end gap-9">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="w-[170px] rounded-lg bg-[#9e3d10] py-5 font-primary text-lg text-[#c08a63]"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-24 font-primary-bold text-xl text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const FormField = ({ id, label, placeholder }: FormFieldProps) => {
  return (
    <div className="mt-9">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base text-[#c9c9c9]">
          {label}
        </label>
        <InfoCircleIcon className="h-5 w-5 shrink-0 text-[#c9c9c9]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded border border-[#4a4a4a] bg-[#262626] px-5 py-4 text-base text-[#e6e6e6] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

const GearIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoCircleIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16.5v-5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
