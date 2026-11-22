import cx from "classix";

const FIELD_CLASS =
  "w-full rounded border border-[#4a4a4a] bg-[#1c1c1c] px-4 py-3 font-primary text-[15px] text-[#ededed] outline-none placeholder:text-[#8a8a8a]";

const ACTION_CLASS =
  "rounded-md bg-[#a63c10] px-9 py-3 font-primary text-[15px] text-white";

const ICON_CLASS = "h-5 w-5 shrink-0 text-[#9a9a9a]";

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={ICON_CLASS}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx(ICON_CLASS, "h-6 w-6")}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className={ICON_CLASS}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <span className="font-primary text-[15px] text-[#ededed]">{children}</span>
    <InfoIcon />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[420px] rounded-lg bg-[#101010] px-8 py-9 font-primary text-[#ededed]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[18px]">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="text-[15px] text-[#9a9a9a]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-[18px]">Add New Design</h3>
    </div>

    <div className="mt-7">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={cx(FIELD_CLASS, "mt-3")}
      />
    </div>

    <div className="mt-6">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={cx(FIELD_CLASS, "mt-3")}
      />
    </div>

    <div className="mt-9 flex justify-end gap-10">
      <button type="button" className={ACTION_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-[18px]">Recent Breakdowns</h3>
  </div>
);
