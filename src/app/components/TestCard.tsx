/**
 * TestCard — a self-contained panel reproducing a Figma reference: a dark
 * "UI magician Agent" settings form.
 *
 * Static on purpose: no props, no state, no handlers. Colours are literal
 * values from the reference, because its palette (near-black panel, #272822
 * fields, #843a17 buttons) has no matching semantic token and the repo's dark
 * surfaces only resolve under the `dark` theme class.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#111111] px-5 pt-5 pb-[62px] font-primary text-[11.5px] leading-[14px] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="h-[75px]" />

      <div className="flex items-center gap-[11px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0" />
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-2 text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[14px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span>Design URL</span>
          <InfoIcon />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[13px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[16px] w-[14px] shrink-0"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
