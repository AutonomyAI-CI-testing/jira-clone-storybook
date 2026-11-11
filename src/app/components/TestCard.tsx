const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-11 py-8 text-[#e0e0e0]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[20px] text-[#c9c9c9]">
        UI magician Agent
      </h2>
      <span className="text-[#c9c9c9]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="max-w-[330px] truncate text-[15px]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-40 flex items-center gap-2 text-[#e0e0e0]">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-[19px]">Add New Design</h3>
    </div>

    <div className="mt-16 space-y-7">
      <LabeledInput
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <LabeledInput
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />
    </div>

    <div className="mt-14 flex justify-center gap-8">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[67px] w-[170px] rounded-[6px] bg-[#8f3d1f] text-[15px] text-[#c9c9c9]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-[20px] text-[#e0e0e0]">
      Recent Breakdowns
    </h3>
  </div>
);

const LabeledInput = ({ id, label, placeholder }: LabeledInputProps) => (
  <div>
    <div className="mb-7 flex items-center gap-2">
      <label htmlFor={id} className="text-[15px] text-[#b0b0b0]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-[58px] w-full rounded-[4px] border border-[#5a5a5a] bg-[#262626] px-5 text-[15px] text-[#e0e0e0] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[18px] w-[18px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[20px] w-[20px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[22px] w-[22px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

interface LabeledInputProps {
  id: string;
  label: string;
  placeholder: string;
}
