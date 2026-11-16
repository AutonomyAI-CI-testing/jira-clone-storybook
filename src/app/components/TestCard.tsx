import { Button } from "@app/components/button/button";

const GEAR_ICON_SIZE = 20;
const CHEVRON_ICON_SIZE = 20;
const INFO_ICON_SIZE = 16;

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-elevation-surface-sunken p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon hover:text-icon-brand"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-2 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon size={INFO_ICON_SIZE} />
      <p className="truncate text-sm">From entire frame to a singl...</p>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-10">
      <Button color="danger" className="px-6">
        Awesome
      </Button>
      <Button color="danger" className="px-6">
        Prepare
      </Button>
    </div>

    <h2 className="mt-20 font-primary-black text-xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm text-font-subtle">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-border bg-background-input p-3 text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

const GearIcon = ({ size = GEAR_ICON_SIZE }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ size = INFO_ICON_SIZE }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6h.01" />
  </svg>
);

const ChevronUpIcon = ({ size = CHEVRON_ICON_SIZE }: IconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

interface IconProps {
  size?: number;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
