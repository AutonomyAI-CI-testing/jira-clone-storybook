/**
 * TestCard — a self-contained smoke-test component that reproduces the dark
 * "UI magician Agent" panel from the attached Figma frame.
 *
 * Deliberately static: no props, no state, no data. Fidelity is approximate.
 */

const ChevronUp = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 10 6"
    width="10"
    height="6"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 5L5 1L9 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.14 12.94a7.07 7.07 0 0 0 0-1.88l2-1.58a.5.5 0 0 0 .12-.64l-1.9-3.28a.5.5 0 0 0-.6-.22l-2.39.96a7.03 7.03 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.8a.5.5 0 0 0-.5.42l-.36 2.54a7.03 7.03 0 0 0-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.74 8.84a.5.5 0 0 0 .12.64l2 1.58a7.07 7.07 0 0 0 0 1.88l-2 1.58a.5.5 0 0 0-.12.64l1.9 3.28a.5.5 0 0 0 .6.22l2.39-.96a7.03 7.03 0 0 0 1.63.94l.36 2.54a.5.5 0 0 0 .5.42h3.8a.5.5 0 0 0 .5-.42l.36-2.54a7.03 7.03 0 0 0 1.63-.94l2.39.96a.5.5 0 0 0 .6-.22l1.9-3.28a.5.5 0 0 0-.12-.64l-2-1.58ZM12 15.6A3.6 3.6 0 1 1 15.6 12 3.6 3.6 0 0 1 12 15.6Z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    width="15"
    height="15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8" cy="5.1" r="0.95" fill="currentColor" />
    <rect x="7.1" y="7" width="1.8" height="5" rx="0.9" fill="currentColor" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center justify-between text-[#a4a4a3]">
      <span className="font-primary-bold text-[11.5px]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2.5 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />
  </div>
);

const PanelButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pb-10 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp />
      <span className="truncate font-primary-bold text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[70px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp className="h-[8px] w-[12px]" />
      <h3 className="font-primary-bold text-[13.5px]">Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div className="ml-1 mt-6 flex gap-4">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h3 className="mt-[50px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
