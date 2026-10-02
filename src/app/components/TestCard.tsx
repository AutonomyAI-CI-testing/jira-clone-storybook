/**
 * Smoke-test component reproducing the "UI magician Agent" Figma panel.
 *
 * Deliberately off-token: the frame is a fixed dark design, so its colours are
 * written as literal hex values instead of the app's semantic theme variables.
 * That is intentional for this one component — normal UI work stays on tokens.
 */

const Gear = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.4v2.2M7 12.4v2.2M1.5 4.7l1.9 1.1M10.6 10.2l1.9 1.1M1.5 11.3l1.9-1.1M10.6 5.8l1.9-1.1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Sized by its caller: the frame shows this chevron at two different scales.
const Chevron = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.2 6 1.8l5 4.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-[20px] pb-[62px] pt-[20px] font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <span className="text-[#c9cbca]">
          <Gear />
        </span>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
        <Chevron className="h-[5px] w-[8px] shrink-0 text-[#c9cbca]" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <Chevron className="h-[8px] w-[12px] shrink-0 text-[#c9cbca]" />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-[12px] text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        <span>Personal Access Token</span>
        <span className="text-[#c9cbca]">
          <InfoCircle />
        </span>
      </div>

      <input
        readOnly
        aria-label="Personal Access Token"
        defaultValue="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] text-[#737470] outline-none"
      />

      <div className="mt-[11px] flex items-center gap-[12px] text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        <span>Design URL</span>
        <span className="text-[#c9cbca]">
          <InfoCircle />
        </span>
      </div>

      <input
        readOnly
        aria-label="Design URL"
        defaultValue="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] text-[#71726e] outline-none"
      />

      <div className="mt-[23px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};
