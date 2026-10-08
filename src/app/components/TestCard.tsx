/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" settings
 * panel. Smoke-test scope: no props, no state, no imports, Tailwind-only layout.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="relative h-[508px] w-[254px] overflow-hidden bg-[#1e1e1e] font-['Inter',sans-serif]"
  >
    {/* Top strip */}
    <div className="absolute left-0 top-0 h-[9px] w-[254px] bg-[#262626]" />

    {/* Header */}
    <span className="absolute left-[20px] top-[20px] text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
      UI magician Agent
    </span>
    <span className="absolute left-[216px] top-[20px] h-[16px] w-[14px] text-[#8b8b8b]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </span>

    {/* Collapsed section row */}
    <span className="absolute left-[23px] top-[57px] h-[5px] w-[8px] text-[#8b9291]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </span>
    <span className="absolute left-[40px] top-[54px] text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
      From entire frame to a singl…
    </span>

    {/* "Add New Design" row */}
    <div className="absolute left-[2px] top-[130px] h-[47px] w-[246px] bg-[#262626]" />
    <span className="absolute left-[26px] top-[150px] h-[8px] w-[12px] text-[#b2b2b1]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </span>
    <span className="absolute left-[43px] top-[145px] text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
      Add New Design
    </span>

    {/* Personal Access Token */}
    <span className="absolute left-[20px] top-[189px] text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
      Personal Access Token
    </span>
    <span className="absolute left-[173px] top-[187px] h-[15px] w-[15px] text-[#a4a4a3]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </span>
    <input
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="absolute left-[20px] top-[215px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />

    {/* Design URL */}
    <span className="absolute left-[20px] top-[262px] text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
      Design URL
    </span>
    <span className="absolute left-[100px] top-[260px] h-[15px] w-[15px] text-[#a3a3a2]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    </span>
    <input
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      aria-label="Design URL"
      className="absolute left-[20px] top-[287px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
    />

    {/* Actions */}
    <button
      type="button"
      className="absolute left-[44px] top-[347px] h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
    >
      Awesome
    </button>
    <button
      type="button"
      className="absolute left-[146px] top-[346px] h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
    >
      Prepare
    </button>

    {/* Recent Breakdowns */}
    <span className="absolute left-[20px] top-[430px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
