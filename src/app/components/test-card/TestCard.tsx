import { Button } from "@app/components/button";

/**
 * Self-contained card used as a smoke test: it reproduces the attached
 * "UI magician Agent" Figma frame and takes no props.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[400px] flex-col gap-8 rounded bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <span className="text-icon">
          <GearIcon />
        </span>
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <ChevronUpIcon />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-5">
      <h2 className="flex items-center gap-2 font-primary-bold text-lg">
        <ChevronUpIcon />
        Add New Design
      </h2>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        defaultValue="figd_xxxxxxxxxxxxxxxx"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4 pt-1">
        <Button className="flex-1">Awesome</Button>
        <Button className="flex-1">Prepare</Button>
      </div>
    </div>

    <h2 className="font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, ...inputProps }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-base text-font">
        {label}
      </label>
      <span className="text-icon-subtle">
        <InfoIcon />
      </span>
    </div>

    <input
      id={id}
      type="text"
      className="rounded border border-border-input bg-background-input px-3 py-2 font-primary text-font placeholder:text-font-subtlest hover:bg-background-input-hovered"
      {...inputProps}
    />
  </div>
);

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: string;
}

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);
