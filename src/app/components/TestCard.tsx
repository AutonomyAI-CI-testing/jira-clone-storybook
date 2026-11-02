import cx from "classix";

const SMALL_TEXT = "text-[11.5px] leading-[13.92px]";
const LABEL_TEXT = cx("font-primary-bold", SMALL_TEXT);
const FIELD_BOX = cx(
  "flex w-[211px] items-center bg-[#272822] px-[18px] font-primary-bold"
);
const ACTION_BUTTON = cx(
  "h-10 w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]",
  SMALL_TEXT
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <SettingsIcon />
      </div>

      <div className={cx("mt-[18px] flex items-center gap-[9px]", LABEL_TEXT)}>
        <ChevronUpIcon width={8} height={5} />
        <span className="text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-xs text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="font-primary-bold">Add New Design</span>
      </div>

      <div
        className={cx(
          "mt-7 flex items-center gap-4",
          LABEL_TEXT,
          "text-[#a4a4a3]"
        )}
      >
        <span>Personal Access Token</span>
        <InfoIcon />
      </div>
      <div
        className={cx(
          FIELD_BOX,
          "mt-3 h-9 border border-[#a5adad] text-[#737470]",
          SMALL_TEXT
        )}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div
        className={cx(
          "mt-[11px] flex items-center gap-4",
          LABEL_TEXT,
          "text-[#a3a3a2]"
        )}
      >
        <span>Design URL</span>
        <InfoIcon />
      </div>
      <div
        className={cx(
          FIELD_BOX,
          "mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e]"
        )}
      >
        https://www.figma.com/file/:
      </div>

      <div className="mt-5 flex gap-[17px] pl-6">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={ACTION_BUTTON}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[46px] font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({
  width = 12,
  height = 8,
}: {
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);
