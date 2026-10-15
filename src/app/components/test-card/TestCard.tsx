import type { ReactNode } from "react";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Self-contained and presentational on purpose: no props, no state, no
 * handlers, and nothing in the app imports it. Colours are the frame's own
 * literal values rather than the app's semantic tokens, because the frame is a
 * fixed dark panel and the token system has no equivalent for its rust accent.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-[38px] pb-[70px] pt-[38px] font-primary text-[#c8c8c8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[20px] text-[#c8c8c8]">
          UI magician Agent
        </h1>
        <GearIcon className="h-[22px] w-[22px] shrink-0 text-[#c8c8c8]" />
      </div>

      <div className="mt-[44px] flex items-center gap-3">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#c8c8c8]" />
        <span className="min-w-0 flex-1 truncate font-primary-light text-[17px] text-[#a0a0a0]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[110px] flex items-center gap-3">
        <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#c8c8c8]" />
        <h2 className="font-primary-bold text-[21px] text-[#c8c8c8]">
          Add New Design
        </h2>
      </div>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-[56px] flex justify-center gap-[34px]">
        <PanelButton>Awesome</PanelButton>
        <PanelButton>Prepare</PanelButton>
      </div>

      <h2 className="mt-[120px] font-primary-bold text-[21px] text-[#c8c8c8]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-[52px]">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary text-[17px] text-[#c8c8c8]"
      >
        {label}
      </label>
      <InfoIcon className="h-[20px] w-[20px] shrink-0 text-[#c8c8c8]" />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-3 h-[50px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#2a2a2a] px-[30px] font-primary-light text-[15px] text-[#7a7a7a] outline-none placeholder:text-[#7a7a7a]"
    />
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[62px] w-[168px] rounded-[6px] bg-[#8a3a1a] font-primary text-[17px] text-[#9a9a9a]"
  >
    {children}
  </button>
);

interface IconProps {
  className?: string;
}

const Icon = ({ className, children }: IconProps & { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M6 15l6-6 6 6" />
  </Icon>
);

const InfoIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);
