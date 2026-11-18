/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent"
 * panel from the reference Figma frame.
 *
 * Smoke-test component: no props, no data and no behaviour. The values come
 * from the frame's style guide and are deliberately approximate.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-8 font-[family-name:Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon width={8} height={5} />
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <ChevronUpIcon width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center justify-between">
      <label
        htmlFor="testcard-token"
        className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-token"
      name="testcard-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center justify-between">
      <label
        htmlFor="testcard-design-url"
        className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-design-url"
      name="testcard-design-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-semibold text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d0d0d0"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ width = 10, height = 6 }: SizeProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 5 5 1l4 4"
      stroke="#c9c9c9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#dcdcdc" strokeWidth="1.2" />
    <path
      d="M7.5 6.7v4"
      stroke="#dcdcdc"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.3" r="0.9" fill="#dcdcdc" />
  </svg>
);

interface SizeProps {
  width?: number;
  height?: number;
}
