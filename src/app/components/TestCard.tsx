/**
 * TestCard — a static reproduction of the "UI magician Agent" settings panel.
 *
 * Self-contained by design: it takes no props, holds no state and imports
 * nothing from the app, so it renders the same wherever it is placed. It is a
 * single file rather than the repo's folder-per-component shape on purpose.
 *
 * Colours are written as Tailwind arbitrary values because `theme.colors` in
 * `tailwind.config.js` is a full override — a stock palette class such as
 * `bg-gray-800` compiles to nothing here — and this panel's dark palette has no
 * counterpart among the semantic `--color-*` roles.
 */

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm text-[#d9d9d9]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-2.5 w-full rounded-md border border-[#5a5a5a] bg-[#2b2b2b] px-3 py-3 text-sm text-[#e6e6e6] placeholder:text-[#8c8c8c]"
    />
  </div>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[#d9d9d9]"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16.5" strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#d9d9d9]"
  >
    <circle cx="12" cy="12" r="3.2" />
    <circle cx="12" cy="12" r="7.2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="12"
        y1="4.8"
        x2="12"
        y2="2.2"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
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
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="w-[130px] rounded-md bg-[#8f3b12] py-4 font-primary-bold text-sm text-[#c98a5e]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[380px] bg-[#1e1e1e] px-6 py-6 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-white">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2 text-sm text-[#b3b3b3]">
      <ChevronUpIcon className="h-3.5 w-3.5 shrink-0" />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-white" />
      <h2 className="font-primary-bold text-lg text-white">Add New Design</h2>
    </div>

    <Field
      id="testcard-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testcard-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex justify-center gap-6">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-14 font-primary-bold text-lg text-white">
      Recent Breakdowns
    </h2>
  </div>
);
