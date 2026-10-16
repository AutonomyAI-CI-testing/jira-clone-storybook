type IconProps = {
  className?: string;
};

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.7h.01" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mt-11">
    <div className="flex items-center gap-6">
      <label
        htmlFor={id}
        className="font-primary text-[20px] leading-none text-[#C9C9C9]"
      >
        {label}
      </label>
      <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#C9C9C9]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[68px] w-full rounded-[8px] border border-[#8A8A8A] bg-[#2E2E2E] px-[30px] font-primary text-[20px] text-[#C9C9C9] outline-none placeholder:text-[#8A8A8A]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1B1B1B] px-[42px] py-[34px] font-primary text-[#C9C9C9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-tight">
        UI magician Agent
      </h1>
      <GearIcon className="mt-1 h-[26px] w-[26px] shrink-0 text-[#C9C9C9]" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="h-[14px] w-[22px] shrink-0 text-[#C9C9C9]" />
      <p className="truncate text-[20px] text-[#B4B4B4]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[104px] flex items-center gap-3">
      <ChevronUpIcon className="h-[14px] w-[22px] shrink-0 text-[#C9C9C9]" />
      <h2 className="font-primary-bold text-[24px] leading-none">
        Add New Design
      </h2>
    </div>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-end gap-9">
      <button
        type="button"
        className="h-[62px] w-[172px] rounded-[8px] bg-[#A63C14] text-[22px] text-[#C9C9C9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] w-[172px] rounded-[8px] bg-[#A63C14] text-[22px] text-[#C9C9C9]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[24px]">Recent Breakdowns</h2>
  </div>
);
