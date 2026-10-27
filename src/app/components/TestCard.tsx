/**
 * TestCard — a self-contained reproduction of an attached Figma frame, built as a
 * smoke test of the design-to-component flow. Static furniture only: no props, no
 * state, no handlers.
 *
 * The frame carries its own dark palette, which is not one of the app's six themes,
 * so this component deliberately uses literal colours instead of the semantic
 * tokens. That is an exception for this one-off card, not a pattern for product UI.
 * Typography still comes from the shared CircularStd utilities.
 */
const ChevronUpIcon = ({ className }: { className: string }) => (
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
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className="h-4 w-4 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11.2v5.4" strokeLinecap="round" />
    <path d="M12 7.4v.1" strokeLinecap="round" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.1-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03Z" />
  </svg>
);

const fieldInputClass =
  "mt-3 h-10 w-full rounded-sm border border-[#8c8c8c] bg-[#232323] px-4 text-sm text-[#c9c9c9] outline-none placeholder:text-[#7e7e7e]";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={fieldInputClass} />
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="w-[260px] bg-[#1a1a1a] px-5 pt-5 pb-16 font-primary text-[#c9c9c9]">
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-base text-[#f0f0f0]">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-sm">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <h3 className="mt-24 flex items-center gap-2 font-primary-bold text-base">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      Add New Design
    </h3>

    <div className="mt-10 flex flex-col gap-4">
      <Field id="test-card-token" label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field id="test-card-url" label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-14 flex justify-end gap-3">
      <button type="button" className="rounded bg-[#a64a21] px-4 py-2 text-sm text-[#ce9b83]">
        Awesome
      </button>
      <button type="button" className="rounded bg-[#a64a21] px-4 py-2 text-sm text-[#ce9b83]">
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-base text-[#8c8c8c]">Recent Breakdowns</h3>
  </div>
);
