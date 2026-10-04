// Smoke-test component: a standalone dark panel reproduced from a Figma frame.
// Deliberately self-contained (no props, no data) and deliberately approximate.
// Colour literals here are an intentional exception to the semantic-token rule,
// because this panel matches no theme surface — see the plan for details.

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0 stroke-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7.1 19.7l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3.1 14H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.3 7.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 16.9 4.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 20.9 10H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3 shrink-0 stroke-[#b5b5b5]"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 shrink-0 stroke-[#a4a4a3]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldGroup = ({ label, value }: { label: string; value: string }) => (
  <div className="mt-6">
    <div className="flex items-center gap-1.5">
      <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div className="mt-2 w-full border border-[#a5adad] bg-[#272822] px-2.5 py-2 font-primary text-[11.5px] text-[#737470]">
      {value}
    </div>
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-screen items-start justify-center bg-black p-4 font-primary"
  >
    <div className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] px-5 py-5">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate font-primary-bold text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <FieldGroup
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxx"
      />
      <FieldGroup label="Design URL" value="https://www.figma.com/file/" />

      <div className="mt-6 flex gap-4">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="flex-1 rounded bg-[#843a17] py-2.5 font-primary-bold text-[11.5px] text-[#8c8078] hover:bg-[#9a4520]"
          >
            {label}
          </button>
        ))}
      </div>

      <span className="mt-16 font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
