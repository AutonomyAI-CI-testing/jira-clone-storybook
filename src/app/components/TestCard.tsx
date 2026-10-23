const INPUT_CLASSES =
  "mt-4 w-full rounded-none border border-[#5a5a5a] bg-[#2b2b2b] px-[14px] py-[14px] text-[17px] text-[#e6e6e6] outline-none placeholder:text-[#8f8f8f]";

const BUTTON_CLASSES =
  "rounded bg-[#9c3a12] px-10 py-4 text-[19px] text-[#c9c9c9]";

const HEADING_CLASSES =
  "font-primary-black text-[24px] leading-tight text-[#e6e6e6]";

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center justify-between">
      <span className="text-[19px] text-[#d0d0d0]">{label}</span>
      <InfoIcon className="h-[26px] w-[26px] shrink-0 text-[#d0d0d0]" />
    </span>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-[42px] py-10 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-[22px] leading-tight text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <GearIcon className="h-[26px] w-[26px] shrink-0 text-[#d0d0d0]" />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#d0d0d0]" />
      <span className="min-w-0 truncate text-[17px] text-[#cfcfcf]">
        From entire frame to a single frame
      </span>
    </div>

    <div className="h-[140px]" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#e6e6e6]" />
      <h2 className={HEADING_CLASSES}>Add New Design</h2>
    </div>

    <div className="mt-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-9 flex items-center gap-9">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-[90px] ${HEADING_CLASSES}`}>Recent Breakdowns</h2>
  </div>
);

interface IconProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
