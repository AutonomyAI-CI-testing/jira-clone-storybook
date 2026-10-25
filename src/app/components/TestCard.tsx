/**
 * Smoke-test component reproducing a Figma frame of a dark "Add New Design"
 * settings panel. Self-contained: no props, no state, no data.
 *
 * The frame uses a dark palette that has no equivalent in the product's
 * semantic tokens, so its colours are written here as one-off arbitrary values.
 * Layout and type lean on Tailwind's own scale.
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[26px] w-[26px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6h.08A1.7 1.7 0 0 0 10.1 3.04V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1.04 1.5 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.08a1.7 1.7 0 0 0 1.56 1.02H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.03z" />
  </svg>
);

const CaretUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[22px] w-[22px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16.5v-5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3 font-primary-light text-base text-[#c9c9c9]">
      {label}
      <InfoIcon />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="h-[66px] w-full rounded border border-[#6e6e6e] bg-[#242424] px-[18px] font-primary-light text-base text-[#d9d9d9] placeholder:text-[#8a8a8a]"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 pb-24 pt-7 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button type="button" aria-label="Open settings">
        <GearIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#9b9b9b]">
      <CaretUpIcon />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <h3 className="mt-[150px] flex items-center gap-3 font-primary-bold text-xl">
      <CaretUpIcon />
      Add New Design
    </h3>

    <div className="mt-14 flex flex-col gap-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex gap-9 pl-12">
      <button
        type="button"
        className="h-[68px] w-[170px] rounded-lg bg-[#a9502f] font-primary text-lg text-[#c98f78]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[68px] w-[168px] rounded-lg bg-[#a9502f] font-primary text-lg text-[#c98f78]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
