import { useState } from "react";

const PANEL_CLASS =
  "flex w-full max-w-[520px] flex-col rounded-lg bg-[#1c1c1c] p-5 text-[#e5e5e5]";

const INPUT_CLASS =
  "w-full rounded-sm border border-[#7a7a7a] bg-[#262626] px-3 py-3 text-[14px] text-[#e0e0e0] outline-none placeholder:text-[#8a8a8a]";

const ACTION_CLASS =
  "rounded-md bg-[#a34d2a] px-6 py-3 text-[15px] font-semibold text-[#e9a98a]";

const HEADING_CLASS = "text-[20px] font-bold text-[#e8e8e8]";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="text-[14px] font-semibold text-[#d9d9d9]">{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [accessToken, setAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div id="testElem" className={PANEL_CLASS}>
      <div className="flex items-center justify-between">
        <h2 className={HEADING_CLASS}>UI magician Agent</h2>
        <button type="button" aria-label="Settings" className="text-[#c7c7c7]">
          <GearIcon />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[#c9c9c9]">
        <ChevronUpIcon />
        <span className="max-w-[220px] truncate text-[15px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2 text-[#e8e8e8]">
        <ChevronUpIcon />
        <h2 className={HEADING_CLASS}>Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <FieldLabel>Personal Access Token</FieldLabel>
          <input
            type="text"
            value={accessToken}
            onChange={(event) => setAccessToken(event.target.value)}
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className={INPUT_CLASS}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FieldLabel>Design URL</FieldLabel>
          <input
            type="text"
            value={designUrl}
            onChange={(event) => setDesignUrl(event.target.value)}
            placeholder="https://www.figma.com/file/"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button type="button" className={ACTION_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-10 text-[20px] font-bold text-[#e8e8e8]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
