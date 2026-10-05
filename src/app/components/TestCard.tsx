import { useState } from "react";

export const TestCard = () => {
  const [accessToken, setAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div
      id="testElem"
      className="w-full max-w-[360px] rounded-md bg-[#1e1e1e] p-6 text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-sm text-[#9e9e9e]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-2xl text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <label className="mt-6 flex items-center gap-2">
        <span className="font-primary-bold text-base text-[#e6e6e6]">
          Personal Access Token
        </span>
        <InfoIcon />
      </label>
      <input
        type="text"
        value={accessToken}
        onChange={(event) => setAccessToken(event.target.value)}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-sm border border-[#4a4a4a] bg-[#262626] px-3 py-2.5 text-sm text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a] focus:border-[#6b6b6b]"
      />

      <label className="mt-4 flex items-center gap-2">
        <span className="font-primary-bold text-base text-[#e6e6e6]">
          Design URL
        </span>
        <InfoIcon />
      </label>
      <input
        type="text"
        value={designUrl}
        onChange={(event) => setDesignUrl(event.target.value)}
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded-sm border border-[#4a4a4a] bg-[#262626] px-3 py-2.5 text-sm text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a] focus:border-[#6b6b6b]"
      />

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          className="rounded-sm bg-[#a8451f] px-6 py-3 text-sm text-[#e5b9a3] hover:bg-[#b8501f]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-sm bg-[#a8451f] px-6 py-3 text-sm text-[#e5b9a3] hover:bg-[#b8501f]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-xl text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-[#e6e6e6]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[#e6e6e6]"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[#9e9e9e]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);
