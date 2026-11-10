/**
 * TestCard — static reproduction of the "UI magician Agent" panel from the
 * referenced Figma frame.
 *
 * Smoke test: no props, no state, no data. The frame is a fixed dark panel whose
 * warm palette has no role in this repo's token set (theme.colors is a full
 * override, so stock utilities like `bg-gray-800` compile to nothing), so the
 * values are pinned here as arbitrary values on purpose.
 */

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const GearIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    {...iconProps}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="2.2"
    className="shrink-0"
    {...iconProps}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    strokeWidth="2"
    className="shrink-0"
    {...iconProps}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2">
      <span className="text-[15px]">{label}</span>
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[52px] w-full rounded border border-[#57534e] bg-transparent px-4 text-[15px] placeholder:text-[#78716c]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1917] px-[35px] py-[45px] font-primary text-[#d6d3d1]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[20px] leading-6">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-3 text-[#a8a29e]">
      <ChevronUpIcon />
      <span className="text-[16px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-[22px] leading-7">
        Add New Design
      </h3>
    </div>

    <div className="mt-7 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-9 flex items-center justify-center gap-8">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#a13d16] py-4 text-[17px] text-[#e7e5e4]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[#a13d16] py-4 text-[17px] text-[#e7e5e4]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-[22px] leading-7">
      Recent Breakdowns
    </h3>
  </div>
);
