/**
 * TestCard — a self-contained smoke-test component.
 *
 * Renders the dark "UI magician Agent" settings panel from the attached Figma
 * frame. It takes no props and pulls in no data, router or store, so it renders
 * in isolation. Colours and type sizes are the frame's own values written as
 * Tailwind arbitrary values: this standalone panel's dark palette has no
 * equivalent among the app's semantic theme tokens.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    <circle
      cx="7"
      cy="8"
      r="5.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 2.2"
    />
  </svg>
);

const ChevronUpIcon = ({ size = 8 }: { size?: number }) => (
  <svg
    width={size}
    height={size * 0.62}
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 5L5 1L9 5"
      stroke="currentColor"
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
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.8V11"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
  </svg>
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#0d0d0d] px-5 py-5 font-semibold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-3 text-[#8b9291]">
      <ChevronUpIcon />
      <span className="truncate text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[58px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon size={12} />
      <span className="text-[13.5px] leading-[16px]">Add New Design</span>
    </div>

    <label className="mt-[26px] block">
      <span className="flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
        <InfoIcon />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[10px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[14px] text-[#b5b5b5] placeholder:text-[#737470]"
      />
    </label>

    <label className="mt-[12px] block">
      <span className="flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
        <InfoIcon />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[10px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[13px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />
    </label>

    <div className="mt-[26px] flex justify-center gap-[17px]">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <div className="mb-[40px] mt-auto text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
