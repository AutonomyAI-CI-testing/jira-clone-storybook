/**
 * A self-contained reproduction of the "UI magician Agent" panel from a Figma
 * frame. Smoke test only: it takes no props, holds no state and is wired to no
 * data. The design's literal colours and sizes are written as Tailwind
 * arbitrary values because they have no equivalent in this project's semantic
 * token layer.
 */

const BUTTON_CLASSES =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-[9px] bg-[#1a1a1a]"
    />

    <div className="flex items-start justify-between pr-1">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[#c9c9c9]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center">
      <ChevronUpSmallIcon className="ml-[3px] mr-[9px] shrink-0 text-[#8b9291]" />
      <p className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center">
      <ChevronUpIcon className="ml-[6px] mr-[5px] shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex items-center gap-[28px]">
      <label
        htmlFor="test-card-token"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] pl-[18px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#a5adad] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[17px]">
      <label
        htmlFor="test-card-design-url"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon className="shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[18px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#929291] outline-none placeholder:text-[#71726e]"
    />

    <div className="ml-[24px] mt-[22px] flex gap-[17px]">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const ChevronUpSmallIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M0.6 4.2 4 0.9l3.4 3.3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 6.6 6 1.4l5 5.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 7v3.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);
