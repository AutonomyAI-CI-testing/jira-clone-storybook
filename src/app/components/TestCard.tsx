/**
 * TestCard — reproduces the "UI magician Agent" / "Add New Design" panel from
 * the reference design.
 *
 * Self-contained: takes no props, holds no state and wires up no behaviour.
 * Colours are taken from the reference design directly, because its palette
 * (near-black surface, burnt-orange actions) has no counterpart in this app's
 * semantic tokens.
 */

const INPUT_CLASS =
  "w-full rounded border-2 border-[#6b6b6b] bg-[#262626] px-4 py-3 font-primary-light text-base text-white placeholder:text-[#8f8f8f]";

const ACTION_CLASS =
  "rounded-md bg-[#a8450e] px-8 py-3 font-primary text-base text-[#f0cdb8] hover:bg-[#94400c]";

const MUTED = "text-[#c9c9c9]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 rounded-xl bg-[#1c1c1c] p-10 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <GearIcon className={MUTED} />
    </div>

    <div className={`flex items-center gap-3 ${MUTED}`}>
      <ChevronUpIcon />
      <span className="truncate font-primary text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="text-[#f2f2f2]" />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxx"
      />

      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-6">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="mt-14 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className={`flex items-center gap-3 ${MUTED}`}>
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input id={id} className={INPUT_CLASS} placeholder={placeholder} />
  </div>
);

const GearIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-7 w-7 shrink-0 ${className}`}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-2.87 1.2V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 7.17 19.7l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 3.14 14H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.34 7.13l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 10 3.14V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 2.87 1.2l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 20.86 10H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-5 w-5 shrink-0 ${className}`}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-5 w-5 shrink-0 ${className}`}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);
