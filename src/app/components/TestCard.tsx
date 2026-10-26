/**
 * TestCard — smoke-test component built from the Figma reference frame.
 *
 * Deliberately self-contained: no props, no state, no external assets, and no
 * dependency on the repo's semantic tokens (the reference palette sits outside
 * the design system). Everything it needs lives in this one file.
 */

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="4.2" />
    <path d="M7 1.2v2.1M7 12.7v2.1M1.3 4.6l1.8 1.1M10.9 10.3l1.8 1.1M1.3 11.4l1.8-1.1M10.9 5.7l1.8-1.1" />
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
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 7v3.9" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1b1b1b] px-5 pb-5 pt-5 font-primary text-[11.5px] leading-[14px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#d9d9d9]">
        <SettingsIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[74px] flex items-center gap-[5px] font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <span>Add New Design</span>
    </div>

    <label
      htmlFor="testElem-token"
      className="mt-7 flex items-center gap-4 text-[#a4a4a3]"
    >
      <span className="font-primary-bold">Personal Access Token</span>
      <span className="text-[#8f8f8f]">
        <InfoIcon />
      </span>
    </label>
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <label
      htmlFor="testElem-url"
      className="mt-3 flex items-center gap-4 text-[#a3a3a2]"
    >
      <span className="font-primary-bold">Design URL</span>
      <span className="text-[#8f8f8f]">
        <InfoIcon />
      </span>
    </label>
    <input
      id="testElem-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 font-primary text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
