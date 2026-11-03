const Icon = ({ className, children }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = () => (
  <Icon className="h-6 w-6 text-white">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <Icon className={className}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className }: { className: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[15px] text-white">
        {label}
      </label>
      <InfoIcon className="h-5 w-5 text-[#d0d0d0]" />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-4 h-[70px] w-full rounded border border-[#8a8a8a] bg-[#2b2b2b] px-8 text-[15px] text-[#8a8a8a] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const RustButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[72px] w-[167px] rounded-lg bg-[#8c3a17] text-[17px] text-[#9c8f88]"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[508px] bg-[#1a1a1a] px-10 pt-10 pb-24 font-primary">
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-[20px] text-white">
            UI magician Agent
          </h1>
          <GearIcon />
        </div>

        <div className="mt-6 flex items-center gap-2">
          <ChevronUpIcon className="h-[18px] w-[18px] text-white" />
          <span className="max-w-[380px] truncate text-[15px] text-[#9a9a9a]">
            From entire frame to a single component
          </span>
        </div>

        <div className="mt-24 flex items-center gap-3">
          <ChevronUpIcon className="h-6 w-6 text-white" />
          <h2 className="font-primary-bold text-[22px] text-white">
            Add New Design
          </h2>
        </div>

        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />

        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="mt-12 flex justify-center gap-9">
          <RustButton>Awesome</RustButton>
          <RustButton>Prepare</RustButton>
        </div>

        <h2 className="mt-28 font-primary-bold text-[18px] text-white">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

interface IconProps {
  className: string;
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
