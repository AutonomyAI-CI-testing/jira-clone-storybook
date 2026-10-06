/**
 * TestCard — smoke-test component.
 *
 * Reproduces a dark phone-width settings panel from a Figma frame, purely to
 * prove the design-to-component-to-preview pipeline works end to end. It is
 * deliberately self-contained: no props, no state, no data, and no imports from
 * the app. It also sits outside the app's semantic design-token system on
 * purpose — the colours below are approximate literal values read from the
 * frame, not tokens, and should not be "corrected" into the design system.
 */

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75h.01" />
  </svg>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="mt-8">
    <div className="flex items-center gap-2 text-[19px] text-[#c8c8c8]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      defaultValue={value}
      className="mt-4 h-[68px] w-full border border-[#565656] bg-[#232323] px-6 text-[18px] text-[#8a8a8a] outline-none"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[72px] flex-1 rounded-[6px] bg-[#a04a1e] text-[19px] text-[#969696]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1a1a1a] px-10 py-10 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-start justify-between text-[#dcdcdc]">
      <h1 className="text-[22px] font-bold">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[19px] text-[#c8c8c8]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-40 flex items-center gap-3 text-[24px] font-bold text-[#dcdcdc]">
      <ChevronUpIcon />
      <span>Add New Design</span>
    </div>

    <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" value="https://www.figma.com/file/" />

    <div className="mt-14 flex gap-8 px-6">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <div className="mt-28 text-[24px] font-bold text-[#dcdcdc]">
      Recent Breakdowns
    </div>
  </div>
);

export default TestCard;
