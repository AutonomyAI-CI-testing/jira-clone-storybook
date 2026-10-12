/**
 * TestCard — a smoke-test card reproducing the attached Figma frame.
 * Self-contained: no props, no state, no data, no event handlers.
 * Colour values are the design's literal hexes on purpose (approximate fidelity
 * is the stated bar for this file); do not treat this as a token reference.
 */

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 6.75v3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-7 flex flex-col gap-1.5">
        <div className="flex items-center gap-4">
          <label
            htmlFor="testElem-token"
            className="text-[11.5px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-4">
          <label
            htmlFor="testElem-url"
            className="text-[11.5px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-9 w-full border-2 border-[#929291] bg-[#272822] px-3 text-[11.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-5 flex gap-3.5">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};
