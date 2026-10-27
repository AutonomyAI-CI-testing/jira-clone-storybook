const ChevronUpIcon = ({ className }: IconProps) => (
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

const CogIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-10 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </span>
      <button type="button" aria-label="Settings">
        <CogIcon className="h-4 w-4" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon className="h-[5px] w-[8px] shrink-0" />
      <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpIcon className="h-[8px] w-[12px] shrink-0" />
      <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-6">
      <label
        htmlFor="testcard-token"
        className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      id="testcard-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-6">
      <label
        htmlFor="testcard-url"
        className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      id="testcard-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
