const Icon = ({
  className = "",
  children,
}: IconProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const GearIcon = ({ className = "" }: ClassNameProps): JSX.Element => (
  <Icon className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const ChevronUpIcon = ({ className = "" }: ClassNameProps): JSX.Element => (
  <Icon className={className}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className = "" }: ClassNameProps): JSX.Element => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6 first:mt-9">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon className="h-7 w-7 shrink-0" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded border-2 border-[#c8c8c8] bg-[#242424] px-5 py-5 text-lg outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[#1c1c1c] px-10 py-10 text-[#d0d0d0]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <GearIcon className="h-7 w-7 shrink-0" />
      </div>

      <div className="mt-8 flex items-center gap-3 text-base text-[#b8b8b8]">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[7.5rem] flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h2 className="text-2xl font-bold">Add New Design</h2>
      </div>

      <Field
        id="test-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-9 flex justify-end gap-9">
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#a14a1a] py-5 text-xl"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] rounded-lg bg-[#a14a1a] py-5 text-xl"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 text-2xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};

interface ClassNameProps {
  className?: string;
}

interface IconProps extends ClassNameProps {
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
