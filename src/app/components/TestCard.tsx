import { Button } from "@app/components/button/button";

const ChevronUpIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

const GearIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};

const INPUT_CLASSES =
  "w-full rounded-md bg-background-input p-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <label htmlFor={id} className="text-base text-font-subtle">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className={INPUT_CLASSES}
      />
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3 border-b border-border pb-6 text-font-subtle">
        <ChevronUpIcon />
        <span className="text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-12 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-8">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-6">
        <Button
          color="warning"
          variant="contained"
          className="flex-1 px-6 py-3 text-base"
        >
          Awesome
        </Button>
        <Button
          color="warning"
          variant="contained"
          className="flex-1 px-6 py-3 text-base"
        >
          Prepare
        </Button>
      </div>

      <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
