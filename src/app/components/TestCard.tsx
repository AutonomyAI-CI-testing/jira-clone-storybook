/**
 * Smoke-test card — a static recreation of the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state and no event handlers. The palette is
 * written as Tailwind arbitrary values because the frame is an external dark UI
 * whose near-black surfaces and rust buttons have no counterpart in this repo's
 * semantic token set.
 */

const ChevronUp = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M3.5 10.5 8 6l4.5 4.5" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.6v3M12 18.4v3M2.6 12h3M18.4 12h3M5.4 5.4l2.1 2.1M16.5 16.5l2.1 2.1M18.6 5.4l-2.1 2.1M7.5 16.5l-2.1 2.1" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.2v4" />
    <circle cx="8" cy="4.9" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FieldGroup = ({ label, placeholder }: FieldGroupProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="text-[15px] leading-5 text-[#cfcfcf]">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="w-full rounded-[4px] border border-[#6f6f6f] bg-[#1c1c1c] px-4 py-3 text-[15px] text-[#d8d8d8] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="w-[130px] rounded-[4px] bg-[#8f3c15] py-3 text-[16px] text-[#d6d6d6]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[380px] flex-col bg-[#141414] px-6 py-6 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[19px] leading-6 text-[#d9d9d9]">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUp />
      <span className="text-[16px] leading-6 text-[#cfcfcf]">
        From entire frame to a singl...
      </span>
    </div>

    <div aria-hidden="true" className="h-[110px]" />

    <div className="flex items-center gap-2.5 text-[#e8e8e8]">
      <ChevronUp />
      <h2 className="text-[21px] leading-7">Add New Design</h2>
    </div>

    <div className="mt-7 flex flex-col gap-5">
      <FieldGroup
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
      <FieldGroup label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-7 flex items-center gap-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-12 text-[21px] leading-7 text-[#e8e8e8]">
      Recent Breakdowns
    </h2>

    <div aria-hidden="true" className="h-[90px]" />
  </div>
);

interface FieldGroupProps {
  label: string;
  placeholder: string;
}
