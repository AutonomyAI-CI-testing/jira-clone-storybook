const ICON_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-full w-full"
    {...ICON_PROPS}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-full w-full"
    {...ICON_PROPS}
    strokeWidth={1.5}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-full w-full"
    {...ICON_PROPS}
    strokeWidth={1.5}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FIELD_LABEL_CLASS = "text-[24px] text-[#c9c9c9]";

const FIELD_INPUT_CLASS =
  "mt-4 h-[62px] w-full rounded-[2px] border border-[#8a8a8a] bg-transparent pl-[35px] text-[24px] text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const ACTION_BUTTON_CLASS =
  "h-[76px] w-[168px] rounded-[6px] bg-[#b3512b] text-[26px] text-[#a89a94]";

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#1a1a1a] px-10 py-10">
    <div className="flex items-center justify-between">
      <h1 className="text-[26px] font-semibold text-[#d4d4d4]">
        UI magician Agent
      </h1>
      <span className="h-[34px] w-[34px] text-[#c8c8c8]">
        <SettingsIcon />
      </span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <span className="h-5 w-5 shrink-0 text-[#8f8f8f]">
        <ChevronUpIcon />
      </span>
      <span className="min-w-0 truncate text-[24px] text-[#8f8f8f]">
        From entire frame to a singl…
      </span>
    </div>

    <h2 className="mt-[150px] flex items-center gap-3 text-[28px] font-semibold text-[#d0d0d0]">
      <span className="h-[26px] w-[26px] shrink-0">
        <ChevronUpIcon />
      </span>
      Add New Design
    </h2>

    <div className="mt-14">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-access-token" className={FIELD_LABEL_CLASS}>
          Personal Access Token
        </label>
        <span className="h-7 w-7 shrink-0 text-[#b0b0b0]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="test-card-access-token"
        name="accessToken"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-design-url" className={FIELD_LABEL_CLASS}>
          Design URL
        </label>
        <span className="h-7 w-7 shrink-0 text-[#b0b0b0]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="test-card-design-url"
        name="designUrl"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_INPUT_CLASS}
      />
    </div>

    <div className="mt-12 flex gap-[35px] pl-12">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[30px] font-bold text-[#c0c0c0]">
      Recent Breakdowns
    </h2>
  </div>
);
