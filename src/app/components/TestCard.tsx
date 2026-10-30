/**
 * TestCard
 *
 * A static reproduction of the "UI magician Agent" panel from a Figma frame.
 * Self-contained smoke test: no props, no data, no interactivity.
 *
 * Palette read off the frame (approximate, by design):
 *   panel #1c1c1c · heading #e6e6e6 · muted #9a9a9a · label #dedede
 *   field fill #242424 · field border #8a8a8a · button #a94a22
 *
 * Literal colours are used on purpose: the frame is a self-dark Figma-plugin
 * panel, and this repo's semantic tokens render light unless the dark theme
 * class is active, so they cannot reproduce it.
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#e6e6e6]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold text-base text-[#dedede]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full rounded border-2 border-[#8a8a8a] bg-[#242424] px-4 py-3 text-[#e6e6e6] outline-none placeholder:text-[#9a9a9a]"
    />
  </div>
);

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[168px] rounded bg-[#a94a22] py-3 text-[#d9d9d9]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 py-10 font-primary text-[#e6e6e6]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl leading-none">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#e6e6e6]">
        <GearIcon />
      </button>
    </div>

    {/* Collapsed step row */}
    <div className="mt-7 flex items-center gap-3 text-[15px] text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Section */}
    <div className="mt-24 flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-7">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    {/* Actions */}
    <div className="mt-9 flex gap-8 pl-12">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  label: string;
}

export default TestCard;
