/**
 * TestCard — a self-contained smoke-test card reproducing the layout of an
 * attached Figma frame (a dark "UI magician Agent" settings panel).
 *
 * Deliberately static: no props, no state, no data. Colours and spacing are
 * approximations read off the frame, not design-system tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full rounded-md bg-[#191919] px-6 py-8 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-primary-bold text-[#d8d8d8]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#d8d8d8]" />
      <span className="truncate text-lg text-[#8f8f8f]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#8f8f8f]" />
      <h2 className="text-2xl font-primary-bold text-[#d8d8d8]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 flex flex-col gap-8">
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

    <div className="mt-12 flex gap-7">
      <button
        type="button"
        className="h-[70px] flex-1 rounded-md bg-[#a63d18] text-2xl text-[#dfae99]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[70px] flex-1 rounded-md bg-[#a63d18] text-2xl text-[#dfae99]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 text-2xl font-primary-bold text-[#d8d8d8]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-sm border border-[#4d4d4d] bg-[#202020] px-5 py-4 text-lg text-[#c9c9c9] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-7 w-7 shrink-0 text-[#d8d8d8]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="12"
        y1="2.5"
        x2="12"
        y2="4.5"
        transform={`rotate(${angle} 12 12)`}
      />
    ))}
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-5 w-5 shrink-0 text-[#d8d8d8]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
  >
    <circle cx="8" cy="8" r="6.6" />
    <line x1="8" y1="7.2" x2="8" y2="11.2" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
