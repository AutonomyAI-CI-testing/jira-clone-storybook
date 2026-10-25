/**
 * Smoke-test component: a static reproduction of a Figma frame.
 *
 * Self-contained by request — no props, no state, no event handlers, nothing
 * wired to the app. Colours are literals drawn from the repo's dark palette
 * (plus one orange with no token equivalent) so the panel reads the same in
 * every theme; it deliberately does not use the semantic token layer.
 */

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

const ChevronUp = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="6.5" />
    <circle cx="12" cy="12" r="2.6" />
    <path
      d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4M4.6 4.6l2.8 2.8M16.6 16.6l2.8 2.8M19.4 4.6l-2.8 2.8M7.4 16.6l-2.8 2.8"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-lg bg-[#1d2125] px-10 py-6 font-primary text-[#dee4ea]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[20px] leading-6">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[16px] text-[#b6c2cf]">
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[150px] flex items-center gap-2">
        <ChevronUp />
        <span className="font-primary-bold text-[22px] leading-7">
          Add New Design
        </span>
      </div>

      {FIELDS.map((field) => (
        <div key={field.label} className="mt-8">
          <div className="flex items-center gap-2 text-[16px] text-[#b6c2cf]">
            <span>{field.label}</span>
            <InfoIcon />
          </div>
          <div className="mt-3 flex h-[52px] w-full items-center rounded-md border border-[#454f59] bg-[#161a1d] px-4 text-[16px] text-[#8c9bab]">
            {field.placeholder}
          </div>
        </div>
      ))}

      <div className="mt-8 flex gap-8">
        {BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-14 w-[168px] rounded-lg bg-[#b0441d] text-[17px] text-[#ded0c8]"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-24 font-primary-bold text-[22px] leading-7 text-[#dee4ea]">
        Recent Breakdowns
      </div>
    </div>
  );
};
