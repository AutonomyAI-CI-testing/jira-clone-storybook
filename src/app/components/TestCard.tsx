import { Button } from "./button/button";

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
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9.25" />
    <path d="M12 11.25v5.5" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <label htmlFor={id} className="flex items-center gap-3 font-primary text-[18px] leading-6">
      {label}
      <InfoIcon className="size-6 shrink-0 text-font-subtle" />
    </label>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary text-[19px] leading-7 text-font placeholder:text-font-subtlest"
    />
  </div>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-elevation-surface px-9 py-10 text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-[22px] leading-8">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open agent settings"
          className="shrink-0 rounded p-1 text-font-subtle"
        >
          <SettingsIcon className="size-7" />
        </button>
      </div>

      <div className="mt-7 flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon className="size-5 shrink-0" />
        <p className="font-primary text-[19px] leading-7">From entire frame to a singl...</p>
      </div>

      <h2 className="mt-32 flex items-center gap-2 font-primary-bold text-2xl leading-8">
        <ChevronUpIcon className="size-6 shrink-0 text-font-subtle" />
        Add New Design
      </h2>

      <div className="mt-20 flex flex-col gap-10">
        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex gap-9">
        <Button type="button" size="lg" className="flex-1">
          Awesome
        </Button>
        <Button type="button" size="lg" className="flex-1">
          Prepare
        </Button>
      </div>

      <h2 className="mt-32 font-primary-bold text-2xl leading-8">Recent Breakdowns</h2>
    </div>
  );
}
