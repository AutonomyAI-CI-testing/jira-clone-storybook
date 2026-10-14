import { Button } from "@app/components/button/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface px-5 pb-14 pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
      <span className="truncate font-primary-bold text-2xs text-font-subtlest">
        From entire frame to a single component
      </span>
    </div>

    <h3 className="mt-[77px] flex items-center gap-2 font-primary-bold text-xs">
      <ChevronUpIcon className="h-2 w-3 shrink-0" />
      Add New Design
    </h3>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-token"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded-md bg-background-input px-3 font-primary-bold text-2xs text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-url"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full rounded-md bg-background-input px-3 font-primary-bold text-2xs text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-[22px] flex justify-end gap-4">
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="h-9 w-[85px] font-primary-bold text-2xs"
      >
        Awesome
      </Button>
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="h-9 w-[85px] font-primary-bold text-2xs"
      >
        Prepare
      </Button>
    </div>

    <h3 className="mt-[47px] font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className="shrink-0 text-font-subtle"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.4v3.6" strokeLinecap="round" />
    <circle cx="8" cy="5" r=".9" fill="currentColor" stroke="none" />
  </svg>
);
