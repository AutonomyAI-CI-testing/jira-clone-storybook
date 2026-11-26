/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * frame. It takes no props, holds no state and is not routed anywhere; it
 * exists to check that a design frame can be turned into a component and
 * rendered.
 *
 * The frame is a dark grey panel with a rust-orange accent, which the app's
 * semantic token layer (a light Atlassian board) has no equivalent for, so the
 * colours below are explicit values read off the frame rather than tokens.
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5V16" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-lg text-[#d0d0d0]">
        {label}
      </label>
      <button
        type="button"
        aria-label={`More information about ${label}`}
        className="text-[#d0d0d0]"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-none bg-[#3a3a3a] px-8 py-4 font-primary text-lg text-[#e6e6e6] outline outline-1 outline-[#d9d9d9] placeholder:text-[#9a9a9a]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-[44px] py-[44px] font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#e6e6e6]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="min-w-0 flex-1 truncate font-primary text-lg text-[#b3b3b3]">
        From entire frame to a single component breakdown
      </span>
    </div>

    {/* The frame leaves an empty band between the collapsed row and the form. */}
    <div className="h-[150px]" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-black text-2xl text-[#d9d9d9]">
        Add New Design
      </h3>
    </div>

    <div className="mt-8 flex flex-col gap-8">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 grid grid-cols-2 gap-9">
      <button
        type="button"
        className="rounded-none bg-[#b4531f] px-4 py-5 font-primary text-lg text-[#d8cfc7]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-none bg-[#b4531f] px-4 py-5 font-primary text-lg text-[#d8cfc7]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-black text-2xl text-[#d9d9d9]">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
