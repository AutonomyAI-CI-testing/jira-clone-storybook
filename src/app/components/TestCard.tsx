/**
 * TestCard — a self-contained smoke test of the design-to-component path.
 *
 * Reproduces the "UI magician Agent" panel from the supplied Figma frame.
 * It takes no props and holds no state: the markup is static, and the spacing,
 * colour and type are approximations read from the frame image rather than
 * values taken from the design file.
 */

const ACTION_BUTTON_CLASS =
  "w-[170px] rounded-lg bg-[#a8481a] px-6 py-5 text-[19px] text-[#c9c2bd]";

const FIELD_INPUT_CLASS =
  "mt-6 w-full rounded-sm border border-[#8a8a8a] bg-[#1c1c1c] px-4 py-5 text-[17px] text-[#d6d3d0] outline-none placeholder:text-[#8f8b88]";

interface LabelledFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

function LabelledField({ id, label, placeholder, className }: LabelledFieldProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <label htmlFor={id} className="text-[19px]">
          {label}
        </label>
        <InfoIcon className="h-6 w-6 shrink-0" />
      </div>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className={FIELD_INPUT_CLASS}
      />
    </div>
  );
}

interface IconProps {
  className?: string;
}

function GearIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: IconProps) {
  return (
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
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 11.5v5" strokeLinecap="round" />
      <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[500px] rounded-[10px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#d6d3d0]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[22px]">UI magician Agent</h2>
        <GearIcon className="h-6 w-6 shrink-0" />
      </div>

      <div className="mt-9 flex items-center gap-3">
        <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#9a9691]" />
        <span className="truncate text-[17px] text-[#9a9691]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h3 className="font-primary-bold text-[22px]">Add New Design</h3>
      </div>

      <LabelledField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-10"
      />
      <LabelledField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-8"
      />

      <div className="mt-12 flex justify-center gap-8">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-bold text-[21px]">Recent Breakdowns</h3>
    </div>
  );
}
