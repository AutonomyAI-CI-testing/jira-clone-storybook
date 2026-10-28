const ICON_CLASS = "h-5 w-5 shrink-0 text-[#c9c9c9]";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 shrink-0 text-[#d4d4d4]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" />
    <path d="M12 7.9h.01" />
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
}): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg text-[#e6e6e6]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[62px] w-full rounded-md border border-[#8a8a8a] bg-[#242424] px-5 text-base text-[#c9c9c9] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#191919] px-10 pb-24 pt-11 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon className="h-4 w-4 text-[#d4d4d4]" />
      <span className="text-base text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 text-[#f2f2f2]" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="ml-12 mt-12 flex gap-6">
      <button
        type="button"
        className="flex h-[74px] items-center justify-center rounded-md bg-[#a83e1a] px-10 font-primary-bold text-lg text-[#f5e6df]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[74px] items-center justify-center rounded-md bg-[#a83e1a] px-10 font-primary-bold text-lg text-[#f5e6df]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
