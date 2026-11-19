/**
 * TestCard — a self-contained, static reproduction of the attached Figma frame.
 *
 * Smoke test only: no props, no state, no interactions. Spacing, colour and type are
 * visual estimates from the reference image (the design's own style guide was not
 * available), so the literals below are intentionally local to this file and are not
 * part of the semantic token layer.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#121314] px-10 pt-10 pb-40 font-primary text-[#d6d8db]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[#d6d8db]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate text-lg text-[#a9acb1]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-xl text-[#d6d8db]">
        Add New Design
      </h3>
    </div>

    <div className="mt-12">
      <FieldLabel label="Personal Access Token" />
      <input
        type="text"
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-6 h-16 w-full rounded-sm border border-[#55585c] bg-[#1f2123] px-7 text-base text-[#d6d8db] outline-none placeholder:text-[#6e7175]"
      />
    </div>

    <div className="mt-9">
      <FieldLabel label="Design URL" />
      <input
        type="text"
        name="designUrl"
        placeholder="https://www.figma.com/file/"
        className="mt-7 h-16 w-full rounded-sm border border-[#55585c] bg-[#1f2123] px-7 text-base text-[#d6d8db] outline-none placeholder:text-[#6e7175]"
      />
    </div>

    <div className="mt-14 flex gap-9">
      <button
        type="button"
        className="h-[52px] flex-1 rounded-lg bg-[#a8492a] text-[17px] text-[#a0938c]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[52px] flex-1 rounded-lg bg-[#a8492a] text-[17px] text-[#a0938c]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-xl text-[#d6d8db]">
      Recent Breakdowns
    </h3>
  </div>
);

const FieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <span className="text-base text-[#b4b7bb]">{label}</span>
    <InfoIcon />
  </div>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={1.5} className="h-7 w-7 text-[#c9ccd1]">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={2} className="h-5 w-5 shrink-0 text-[#c9ccd1]">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} strokeWidth={1.5} className="h-[22px] w-[22px] text-[#b4b7bb]">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default TestCard;
