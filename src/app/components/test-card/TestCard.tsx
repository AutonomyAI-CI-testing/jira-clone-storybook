export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <svg
        width="14"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b5b5b5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="#8b9291"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 4L4 1L7 4" />
      </svg>
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        stroke="#b2b2b1"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1.5 6L6 1.5L10.5 6" />
      </svg>
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-5">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="#a4a4a3"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="7.5" cy="7.5" r="6.5" />
        <path d="M7.5 6.6v4" strokeLinecap="round" />
        <circle cx="7.5" cy="4.4" r="0.7" fill="#a4a4a3" stroke="none" />
      </svg>
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-5">
      <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="#a3a3a2"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="7.5" cy="7.5" r="6.5" />
        <path d="M7.5 6.6v4" strokeLinecap="round" />
        <circle cx="7.5" cy="4.4" r="0.7" fill="#a3a3a2" stroke="none" />
      </svg>
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="ml-6 mt-6 flex gap-[17px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
