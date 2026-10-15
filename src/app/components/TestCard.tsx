const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5V11" />
    <path d="M12 8.2h.01" />
  </svg>
);

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pb-6 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-sm leading-none text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="shrink-0 text-[#d4d4d4]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-3">
      <ChevronUpIcon className="h-2 w-2 shrink-0 text-[#d4d4d4]" />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon className="h-3 w-3 shrink-0 text-[#e6e6e6]" />
      <h2 className="font-primary-bold text-sm leading-none text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7">
      <label
        htmlFor="personal-access-token"
        className="flex items-center gap-2 font-primary-bold text-2xs leading-none text-[#a4a4a3]"
      >
        Personal Access Token
        <InfoIcon />
      </label>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2.5 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] font-primary-bold text-2xs text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <label
        htmlFor="design-url"
        className="flex items-center gap-2 font-primary-bold text-2xs leading-none text-[#a3a3a2]"
      >
        Design URL
        <InfoIcon />
      </label>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-2xs text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-11 font-primary-bold text-sm leading-none text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
