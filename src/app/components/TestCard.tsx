/**
 * TestCard — a standalone card built from the "UI magician Agent" Figma frame.
 *
 * Self-contained and presentational: it takes no props, and the fields and
 * buttons are inert. Colours are literal rather than semantic tokens because
 * the panel is intended to look the same in every app theme.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 pb-24 pt-10 font-primary text-[#e0e0e0]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[22px] leading-none text-[#e0e0e0]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex-center cursor-pointer text-[#e0e0e0]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed disclosure row */}
      <div className="mt-10 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[15px] text-[#8a8a8a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-40" />

      {/* Section header */}
      <div className="flex items-center gap-3">
        <ChevronUpIcon />
        <h3 className="font-primary-bold text-[20px] text-[#e0e0e0]">
          Add New Design
        </h3>
      </div>

      <div className="mt-14 space-y-8">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-9">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={buttonClass}>
            {label}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-24 font-primary-bold text-[20px] text-[#e0e0e0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const buttonClass =
  "cursor-pointer rounded-lg bg-[#a0431e] px-12 py-6 font-primary text-[16px] text-[#b0b0b0]";

const inputClass =
  "mt-7 h-[68px] w-full rounded-md border border-[#8f8f8f] bg-[#242424] px-10 font-primary-light text-[15px] text-[#e0e0e0] outline-none placeholder:text-[#8a8a8a]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-[16px] text-[#e0e0e0]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "h-[22px] w-[22px] shrink-0",
} as const;

const GearIcon = () => (
  <svg {...iconProps}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg {...iconProps}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
