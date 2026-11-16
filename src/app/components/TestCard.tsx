/**
 * TestCard — a self-contained, prop-less smoke-test component.
 *
 * Reproduces the attached Figma frame (a dark "UI magician Agent" panel).
 * Colours are intentionally literal hex values rather than semantic tokens:
 * the design is a dark third-party UI whose orange has no counterpart in this
 * repo's palette. This is a throwaway smoke test and not a precedent.
 */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = ({ className }: { className: string }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const LabeledField = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-[18px]">
      <label
        htmlFor={id}
        className="font-primary text-[17px] leading-none text-[#8a8a8a]"
      >
        {label}
      </label>
      <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#8a8a8a]" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-[18px] w-full rounded-[6px] border-2 border-[#6b6b6b] bg-[#2b2b2b] px-5 py-[22px] font-primary text-[17px] text-[#d9d9d9] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-[40px] pb-[64px] pt-[40px] font-primary text-[#d9d9d9]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-[22px] leading-none">
          UI magician Agent
        </h1>
        <GearIcon className="h-[26px] w-[26px] shrink-0" />
      </div>

      <div className="mt-[42px] flex items-center gap-[14px]">
        <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#8a8a8a]" />
        <p className="font-primary-light text-[15px] leading-none text-[#8a8a8a]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[120px] flex items-center gap-[14px]">
        <ChevronUpIcon className="h-[22px] w-[22px] shrink-0" />
        <h2 className="font-primary-black text-[22px] leading-none">
          Add New Design
        </h2>
      </div>

      <div className="mt-[46px]">
        <LabeledField
          id="testcard-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-[38px]">
        <LabeledField
          id="testcard-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-[46px] flex gap-[36px]">
        <button
          type="button"
          className="w-[168px] rounded-[8px] bg-[#8f3f1c] py-5 font-primary text-[17px] leading-none text-[#9a9a9a]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[168px] rounded-[8px] bg-[#8f3f1c] py-5 font-primary text-[17px] leading-none text-[#9a9a9a]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[106px] font-primary text-[19px] leading-none text-[#8a8a8a]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
