/**
 * TestCard — smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state, no data fetching. Colours and sizes are
 * taken from the frame's extracted style guide and are deliberately approximate.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-5 font-primary text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed section row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[70px] flex items-center gap-2">
        <ChevronUpIcon className="shrink-0 text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <Field label="Personal Access Token" labelClassName="text-[#a4a4a3]">
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="mt-1.5 h-[36px] w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </Field>

      {/* Design URL */}
      <Field label="Design URL" labelClassName="text-[#a3a3a2]">
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-1.5 h-[37px] w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </Field>

      {/* Actions */}
      <div className="mt-2.5 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  label,
  labelClassName,
  children,
}: {
  label: string;
  labelClassName: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <span className={`font-primary-bold text-[11.5px] ${labelClassName}`}>
          {label}
        </span>
        <InfoIcon />
      </div>
      {children}
    </div>
  );
};

const ChevronUpIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-3 w-3 ${className ?? ""}`}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[14px] w-[14px] shrink-0 text-[#a4a4a3]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};

const GearIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#b5b5b5]"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};
