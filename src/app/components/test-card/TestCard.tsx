/**
 * TestCard — a smoke-test component.
 *
 * A static, self-contained reproduction of a Figma frame (a dark "UI magician
 * Agent" settings panel). It takes no props, holds no state, and is not wired
 * into the app.
 *
 * Colours are written as arbitrary Tailwind values rather than semantic tokens.
 * The frame is a fixed dark panel whose rust accent has no equivalent in the
 * theme palette, and the semantic tokens are theme-relative (they resolve per
 * `.light` / `.dark` / `.lava` / …), so no single theme class represents this
 * design. Radius, type family and the spacing scale still use the repo's own
 * tokens. Icons are drawn inline because the frame's exported assets are not
 * available.
 */

const ACTIONS = ["Awesome", "Prepare"];

interface ChevronUpIconProps {
  className?: string;
}

const ChevronUpIcon = ({ className = "h-6 w-6" }: ChevronUpIconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10.6 3.09V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15.6 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09A1.65 1.65 0 0 0 20.91 10.6H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-7 w-7 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 11.5v5.5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-light text-lg text-[#c9c9c9]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="h-[70px] w-full rounded-md border-none bg-[#1a1a1a] px-4 font-primary-light text-lg text-[#e6e6e6] outline outline-2 outline-[#707070] placeholder:text-[#8b8b8b]"
    />
  </div>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col rounded-md border border-[#2b2b2b] bg-[#121212] px-10 py-11 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
        <GearIcon />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <span className="truncate font-primary-light text-lg text-[#a8a8a8]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <ChevronUpIcon className="h-7 w-7 shrink-0" />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <Field
          id="test-card-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-8">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[70px] flex-1 rounded-md border-none bg-[#8f3f14] font-primary text-lg text-[#bdbdbd]"
          >
            {action}
          </button>
        ))}
      </div>

      <h3 className="mt-20 font-primary-black text-2xl">Recent Breakdowns</h3>
    </div>
  );
}
