export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-16 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px]">UI magician Agent</span>
      <svg
        width="14"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    {/* Collapsed summary */}
    <div className="mt-4 flex items-center gap-3">
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#8b9291]"
        aria-hidden="true"
      >
        <path d="M1 4L4 1L7 4" />
      </svg>
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 flex items-center gap-3">
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#b2b2b1]"
        aria-hidden="true"
      >
        <path d="M1.5 6L6 1.5L10.5 6" />
      </svg>
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center justify-between">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-[#a4a4a3]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16.5v-5" />
        <path d="M12 8.1v.2" />
      </svg>
    </div>
    <div className="mt-3 flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-5">
      <span className="font-primary-light text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-[#a3a3a2]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16.5v-5" />
        <path d="M12 8.1v.2" />
      </svg>
    </div>
    <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-5">
      <span className="font-primary-light text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-6 flex justify-center gap-4">
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

    {/* Recent Breakdowns */}
    <div className="mt-12 text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
