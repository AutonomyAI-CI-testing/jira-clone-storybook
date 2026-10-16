import cx from "classix";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" panel
 * from the attached Figma frame. Self-contained, no props, no state — it exists
 * to prove the design-to-component path, not to be wired into the app.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </h1>
      <GearIcon className="text-[#B5B5B5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpSmall className="text-[#8B9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpLarge className="text-[#B2B2B1]" />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[26px] flex items-center gap-[12px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
        Personal Access Token
      </span>
      <InfoIcon className="text-[#A4A4A3]" />
    </div>

    <div className="mt-[12px] flex h-9 w-[211px] items-center border border-[#A5ADAD] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-[11px] flex items-center gap-[10px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]">
        Design URL
      </span>
      <InfoIcon className="text-[#A3A3A2]" />
    </div>

    <div className="mt-[12px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726E]">
      https://www.figma.com/file/:
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] cursor-default rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8C8078]"
  >
    {children}
  </button>
);

const ChevronUpSmall = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("shrink-0", className)}
  >
    <path d="M0.7 4.2 4 0.9 7.3 4.2" />
  </svg>
);

const ChevronUpLarge = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("shrink-0", className)}
  >
    <path d="M1 6.8 6 1.4 11 6.8" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className={cx("shrink-0", className)}
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.9" r="0.75" fill="currentColor" />
    <path
      d="M7.5 7.4v3.1"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className={cx("shrink-0", className)}
  >
    <path d="M6.69 1.33A2.8 2.8 0 0 1 9.31 1.33A2.42 2.42 0 0 0 13.12 3.53A2.8 2.8 0 0 1 14.44 5.8A2.42 2.42 0 0 0 14.44 10.2A2.8 2.8 0 0 1 13.12 12.47A2.42 2.42 0 0 0 9.31 14.67A2.8 2.8 0 0 1 6.69 14.67A2.42 2.42 0 0 0 2.88 12.47A2.8 2.8 0 0 1 1.56 10.2A2.42 2.42 0 0 0 1.56 5.8A2.8 2.8 0 0 1 2.88 3.53A2.42 2.42 0 0 0 6.69 1.33Z" />
    <circle cx="8" cy="8" r="2.6" />
  </svg>
);
