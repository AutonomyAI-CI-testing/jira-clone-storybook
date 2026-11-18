import type { ReactNode } from "react";

const inputClasses =
  "mt-4 w-full rounded border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-4 py-4 font-primary text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const buttonClasses =
  "min-w-[168px] rounded bg-[var(--Orange800)] px-6 py-3 font-primary-bold text-lg text-[var(--DarkNeutral1000)]";

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => (
  <div className="flex items-center gap-3">
    <label
      htmlFor={htmlFor}
      className="font-primary-bold text-lg text-[var(--DarkNeutral1000)]"
    >
      {children}
    </label>
    <InfoIcon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral1000)]" />
  </div>
);

const Icon = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-12 text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl leading-none">
        UI magician Agent
      </h1>
      <GearIcon className="h-6 w-6 shrink-0 text-[var(--DarkNeutral1000)]" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral1000)]" />
      <p className="font-primary text-lg text-[var(--DarkNeutral700)]">
        From entire frame to a singl…
      </p>
    </div>

    <section className="mt-32">
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[var(--DarkNeutral1000)]" />
        <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-12">
        <FieldLabel htmlFor="test-card-token">Personal Access Token</FieldLabel>
        <input
          id="test-card-token"
          name="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClasses}
        />
      </div>

      <div className="mt-10">
        <FieldLabel htmlFor="test-card-url">Design URL</FieldLabel>
        <input
          id="test-card-url"
          name="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClasses}
        />
      </div>

      <div className="mt-12 flex justify-center gap-8">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-28 font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);
