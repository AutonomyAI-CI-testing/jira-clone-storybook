import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[300px] rounded-md bg-elevation-surface-raised p-5 font-primary-light text-font shadow-lg"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-base">UI magician Agent</h2>
      <span className="text-icon-subtle" aria-hidden="true">
        <GearIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="min-w-0 truncate text-xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-sm">Add New Design</h3>
    </div>

    <div className="mt-5">
      <label
        htmlFor="testElem-access-token"
        className="flex items-center gap-1.5 text-xs text-font-subtle"
      >
        Personal Access Token
        <span className="text-icon-subtle" aria-hidden="true">
          <InfoIcon />
        </span>
      </label>
      <input
        id="testElem-access-token"
        className="mt-2 w-full rounded-md bg-background-input p-3 text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-4">
      <label
        htmlFor="testElem-design-url"
        className="flex items-center gap-1.5 text-xs text-font-subtle"
      >
        Design URL
        <span className="text-icon-subtle" aria-hidden="true">
          <InfoIcon />
        </span>
      </label>
      <input
        id="testElem-design-url"
        className="mt-2 w-full rounded-md bg-background-input p-3 text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-6 flex gap-4">
      <Button className="flex-1">Awesome</Button>
      <Button color="neutral" variant="subtlest" className="flex-1">
        Prepare
      </Button>
    </div>

    <h3 className="mt-8 font-primary-bold text-sm">Recent Breakdowns</h3>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
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
