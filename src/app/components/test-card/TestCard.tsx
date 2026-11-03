import cx from "classix";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]";
const FIELD_LABEL_CLASS = "text-2xs text-[#a4a4a3]";

const inputClass = (variant: "token" | "url") =>
  cx(
    "w-full bg-[#272822] px-[19px] text-2xs text-[#737470] placeholder:text-[#737470]",
    variant === "token"
      ? "h-9 border border-[#a5adad]"
      : "h-[37px] border-2 border-[#929291]"
  );

const ChevronUp = ({
  width,
  height,
  strokeWidth = 1.2,
}: {
  width: number;
  height: number;
  strokeWidth?: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1.5 6.5L6 2L10.5 6.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth={1} />
    <path
      d="M7.5 6.9v3.4"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.9" r="0.65" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] pb-14 pt-5 font-primary-bold text-xs text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between px-5">
      <h1>UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 px-5 text-2xs text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 px-5">
      <ChevronUp width={12} height={8} strokeWidth={1.8} />
      <h2 className="text-[#b2b2b1]">Add New Design</h2>
    </div>

    <div className={cx("mt-7 flex items-center gap-4 px-5", FIELD_LABEL_CLASS)}>
      <label htmlFor="testElem-token">Personal Access Token</label>
      <InfoIcon />
    </div>
    <div className="mt-3 px-5">
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={inputClass("token")}
      />
    </div>

    <div
      className={cx(
        "mt-[11px] flex items-center gap-4 px-5",
        FIELD_LABEL_CLASS
      )}
    >
      <label htmlFor="testElem-url">Design URL</label>
      <InfoIcon />
    </div>
    <div className="mt-[11px] px-5">
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputClass("url")}
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px] px-5">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] px-5 text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
