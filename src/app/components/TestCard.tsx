import type { SVGProps } from "react";

/**
 * The frame's rust buttons have no semantic role in this design system, so the
 * colour comes from the raw palette through an arbitrary value rather than a
 * token utility.
 */
const RUST_BUTTON =
  "rounded bg-[var(--Orange800)] px-6 py-5 font-primary-bold text-base text-font-subtle";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 text-icon"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px] shrink-0 text-icon"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8 flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="font-primary-bold text-base">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="rounded-md border border-border-bold bg-elevation-surface-sunken px-8 py-5 font-primary text-base placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * A static, self-contained rendering of the "UI magician Agent" panel from the
 * Figma frame. It takes no props and holds no state.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-10 text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <GearIcon />
    </header>

    <div className="mt-10 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-16">
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-12 grid grid-cols-2 gap-9">
        <button type="button" className={RUST_BUTTON}>
          Awesome
        </button>
        <button type="button" className={RUST_BUTTON}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
