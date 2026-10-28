import { Button } from "@app/components/button/button";

const ICON_SIZE = 20;

const INPUT_CLASS =
  "w-full rounded bg-background-input px-3 py-3 outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus:outline-border-brand";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="flex items-center gap-2">
      {label}
      <InfoIcon />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex w-[440px] flex-col gap-6 rounded bg-elevation-surface-overlay p-6 text-font outline outline-2 outline-border">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-font hover:bg-background-neutral-hovered"
        >
          <GearIcon />
        </button>
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a single frame</span>
      </div>

      <div className="flex flex-col gap-5 pt-10">
        <div className="flex items-center gap-2">
          <ChevronUpIcon />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />

        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="flex gap-4 pt-3">
          <Button className="flex-1 py-3">Awesome</Button>
          <Button className="flex-1 py-3">Prepare</Button>
        </div>
      </div>

      <h2 className="pt-6 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
