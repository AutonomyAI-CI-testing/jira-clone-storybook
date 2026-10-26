/**
 * TestCard — a static replica of the "UI magician Agent" settings panel from the
 * reference Figma frame.
 *
 * This is a smoke test: the component takes no props, holds no state and nothing
 * on it is wired up. The panel reproduces an external tool's own dark palette,
 * which this app's semantic theme tokens do not carry, so the design's literal
 * values are used here on purpose rather than semantic token classes.
 */

const GearIcon = (): JSX.Element => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.6v2.2M7 12.2v2.2M1.6 8h2.2M10.2 8h2.2M3.2 4.2l1.6 1.6M9.2 10.2l1.6 1.6M10.8 4.2 9.2 5.8M4.8 10.2 3.2 11.8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
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
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={`M0.9 ${height - 1} ${width / 2} 1 ${width - 0.9} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 7v3.6"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.75" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pb-6 pt-[18px] font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <p className="text-[13.5px] leading-4">UI magician Agent</p>
      <span className="text-[#d0d0d0]">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed summary */}
    <div className="mt-5 flex items-center gap-2">
      <span className="shrink-0 text-[#8b9291]">
        <ChevronUpIcon width={8} height={5} />
      </span>
      <span className="min-w-0 flex-1 truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[76px] flex items-center gap-[5px] pl-1.5">
      <span className="shrink-0 text-[#b2b2b1]">
        <ChevronUpIcon width={12} height={8} />
      </span>
      <p className="text-[13.5px] leading-4">Add New Design</p>
    </div>

    {/* Personal access token */}
    <div className="mt-7">
      <div className="flex items-center gap-5">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <span className="text-[#a4a4a3]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2.5 h-[39px] w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] text-[#b5b5b5] outline-none placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-2.5">
      <div className="flex items-center gap-5">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <span className="text-[#a4a4a3]">
          <InfoIcon />
        </span>
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-[41px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] text-[#b5b5b5] outline-none placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent breakdowns */}
    <h2 className="mt-[46px] text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
