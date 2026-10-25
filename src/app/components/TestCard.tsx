/**
 * Standalone reproduction of the referenced Figma frame ("UI magician Agent").
 *
 * Self-contained by design: it takes no props and is not wired into the app.
 * The panel's palette (near-black surface, brick-orange actions) has no
 * equivalent in this repo's semantic tokens, so the values here are literals
 * scoped to this file.
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label htmlFor={id} className="text-[17px]">
        {label}
      </label>
      <button
        type="button"
        aria-label={`About ${label}`}
        className="text-[#c4c4c4] transition-colors duration-150 hover:text-[#e6e6e6]"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full rounded-[2px] border border-[#7a7a7a] bg-transparent px-4 py-5 text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pb-24 pt-10 text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[22px] font-semibold">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#c4c4c4] transition-colors duration-150 hover:text-[#e6e6e6]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-3 text-[18px] text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="text-[26px] font-semibold">Add New Design</h2>
    </div>

    <div className="mt-14 flex flex-col gap-10">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex items-center gap-8">
      <button
        type="button"
        className="w-[170px] rounded bg-[#b5451f] py-5 text-[17px] text-[#f4e3dd] transition-colors duration-150 hover:bg-[#a03c1a]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded bg-[#b5451f] py-5 text-[17px] text-[#f4e3dd] transition-colors duration-150 hover:bg-[#a03c1a]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 text-[24px] font-semibold">Recent Breakdowns</h2>
  </div>
);
