/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: one file, no props, no state, approximate fidelity by design.
 */

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronRow = ({
  children,
  className,
  chevronClassName,
}: {
  children: React.ReactNode;
  className?: string;
  chevronClassName?: string;
}) => (
  <div className={`flex items-center gap-3 ${className ?? ""}`}>
    <ChevronUpIcon className={`shrink-0 ${chevronClassName ?? ""}`} />
    {children}
  </div>
);

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={`flex flex-col gap-3 ${className ?? ""}`}>
    <div className="flex items-center gap-14">
      <span className="font-primary text-base text-[#C9C9C9]">{label}</span>
      <InfoIcon className="h-5 w-5 shrink-0 text-[#C9C9C9]" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-[#6E6E6E] bg-[#2C2C2C] px-6 py-5 font-primary text-base text-[#EDEDED] placeholder:text-[#8A8A8A]"
    />
  </div>
);

const PanelButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="w-[170px] rounded-md bg-[#A8430E] py-5 font-primary text-base text-[#D8D8D8] hover:bg-[#8F390C] active:bg-[#7A3009]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[#131313] px-10 py-10 font-primary text-[#EDEDED]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <SettingsIcon className="mt-0.5 h-6 w-6 shrink-0" />
    </div>

    <ChevronRow className="mt-16 text-[#B4B4B4]" chevronClassName="h-4 w-4">
      <span className="min-w-0 truncate text-base">
        From entire frame to a single component
      </span>
    </ChevronRow>

    <ChevronRow className="mt-32" chevronClassName="h-5 w-5 text-[#DDDDDD]">
      <h2 className="font-primary-bold text-xl text-[#DDDDDD]">Add New Design</h2>
    </ChevronRow>

    <Field
      className="mt-16"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-10"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-14 flex items-center justify-end gap-8">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-28 font-primary-bold text-xl text-[#DDDDDD]">
      Recent Breakdowns
    </h2>
  </div>
);
