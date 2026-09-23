/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke test only: it takes no props, imports nothing from the app, and is not
 * wired into any route. Colours are literal hex values on purpose (a deliberate,
 * scoped exception to the app's semantic-token convention) because it reproduces
 * a dark Figma frame rather than a product surface.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="box-border flex w-[508px] flex-col bg-black px-10 py-10 font-primary text-[#b0b0b0]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[27px] font-semibold leading-[33px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-7 w-7 shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[30px] flex items-center gap-3">
        <ChevronUp className="h-3 w-4 shrink-0 text-[#8b9291]" />
        <p className="text-[23px] font-semibold leading-[28px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[150px] flex items-center gap-3">
        <ChevronUp className="h-3 w-4 shrink-0 text-[#b2b2b1]" />
        <h2 className="text-[27px] font-semibold leading-[33px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[40px] flex items-center gap-3">
        <span className="text-[23px] font-semibold leading-[28px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoCircle className="h-5 w-5 shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
        className="mt-4 h-[72px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[23px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <div className="mt-[24px] flex items-center gap-3">
        <span className="text-[23px] font-semibold leading-[28px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoCircle className="h-5 w-5 shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        aria-label="Design URL"
        className="mt-4 h-[72px] w-full border border-[#a5adad] bg-[#272822] px-4 text-[21px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-8 flex gap-[34px]">
        <button
          type="button"
          className="h-[74px] w-[170px] rounded-[4px] bg-[#843a17] text-[23px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[74px] w-[170px] rounded-[4px] bg-[#843a17] text-[23px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[90px] text-[27px] font-semibold leading-[33px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 10"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 8.5 8 1.5l7 7" />
  </svg>
);

const InfoCircle = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

export default TestCard;
