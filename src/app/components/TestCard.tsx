import { Button } from "./button/button";

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.34.44.6.8.71H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M1.5 6L6 1.5L10.5 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4V11.2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col rounded-md bg-elevation-surface-sunken p-5 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-sm font-primary-bold text-font-subtle">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-3 text-font-subtlest">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate text-2xs font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon width={12} height={8} />
      <h3 className="text-sm font-primary-bold">Add New Design</h3>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-6 flex items-center gap-2 text-2xs font-primary-bold text-font-subtle"
    >
      Personal Access Token
      <span className="text-font-subtlest">
        <InfoIcon />
      </span>
    </label>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-2 h-9 w-full rounded bg-background-input px-3 text-2xs font-primary-light text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />

    <label
      htmlFor="test-card-url"
      className="mt-4 flex items-center gap-2 text-2xs font-primary-bold text-font-subtle"
    >
      Design URL
      <span className="text-font-subtlest">
        <InfoIcon />
      </span>
    </label>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-2 h-9 w-full rounded bg-background-input px-3 text-2xs font-primary-light text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />

    <div className="mt-5 flex gap-4">
      <Button color="warning" className="h-[37px] w-[85px] text-2xs">
        Awesome
      </Button>
      <Button color="warning" className="h-[37px] w-[85px] text-2xs">
        Prepare
      </Button>
    </div>

    <h3 className="mt-12 text-sm font-primary-bold text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
